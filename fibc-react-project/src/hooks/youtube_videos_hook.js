import { useCallback, useEffect, useRef, useState } from 'react';

export const CHANNEL_ID = 'UCA2XmzXvAr0pLhzGSspAIOQ';
export const CHANNEL_URL = `https://www.youtube.com/channel/${CHANNEL_ID}`;

const FETCH_INTERVAL_MS = 5 * 60 * 1000;

const UPLOADS_TO_SCAN = 10;

const CACHE_PREFIX = 'fibc:yt:v3';

let inFlight = null;

function parseDurationSeconds(iso) {
  const m = /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(iso || '');
  if (!m) return 0;
  const [, d, h, min, s] = m;
  return Number(d || 0) * 86400 + Number(h || 0) * 3600 + Number(min || 0) * 60 + Number(s || 0);
}

function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed?.ts === 'number' && Array.isArray(parsed.items) ? parsed : null;
  } catch {
    return null;
  }
}

function writeCache(key, items) {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), items }));
  } catch(e) {
    console.log('Error occurred writing to cache:' + e.message);
  }
}

async function fetchJson(url) {
  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`YouTube API ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

async function fetchUploads({ apiKey, uploadsPlaylistId }) {
  const listUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
  listUrl.searchParams.set('part', 'contentDetails');
  listUrl.searchParams.set('playlistId', uploadsPlaylistId);
  listUrl.searchParams.set('maxResults', String(UPLOADS_TO_SCAN));
  listUrl.searchParams.set('key', apiKey);

  const listData = await fetchJson(listUrl);
  const ids = (listData.items || [])
    .map((item) => item.contentDetails?.videoId)
    .filter(Boolean);

  if (ids.length === 0) return [];

  const videosUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
  videosUrl.searchParams.set('part', 'snippet,contentDetails,liveStreamingDetails');
  videosUrl.searchParams.set('id', ids.join(','));
  videosUrl.searchParams.set('key', apiKey);

  const videosData = await fetchJson(videosUrl);
  const byId = new Map((videosData.items || []).map((v) => [v.id, v]));

  return ids.flatMap((id) => {
    const item = byId.get(id);
    if (!item) return [];

    const broadcast = item.snippet?.liveBroadcastContent;
    const live = item.liveStreamingDetails;

    let status = 'video';
    if (broadcast === 'live') status = 'live';
    else if (broadcast === 'upcoming') status = 'upcoming';
    else if (live?.actualEndTime) status = 'past-live';

    return [{
      id,
      status,
      title: item.snippet?.title ?? '',
      description: item.snippet?.description ?? '',
      publishedAt: live?.actualStartTime || item.snippet?.publishedAt || null,
      thumbnail:
        item.snippet?.thumbnails?.maxres?.url ||
        item.snippet?.thumbnails?.high?.url ||
        item.snippet?.thumbnails?.medium?.url ||
        item.snippet?.thumbnails?.default?.url ||
        null,
      durationSeconds: parseDurationSeconds(item.contentDetails?.duration),
    }];
  });
}

export function useYouTubeVideos({ archiveCount = 6 } = {}) {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || CHANNEL_ID;
  const configured = Boolean(apiKey && channelId);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(configured);
  const [error, setError] = useState(null);

  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const uploadsPlaylistId = channelId?.startsWith('UC')
    ? `UU${channelId.slice(2)}`
    : channelId;
  const cacheKey = `${CACHE_PREFIX}:${uploadsPlaylistId}`;

  const load = useCallback(() => {
    if (!configured) {
      setLoading(false);
      return;
    }

    const cached = readCache(cacheKey);
    if (cached && Date.now() - cached.ts < FETCH_INTERVAL_MS) {
      if (mounted.current) {
        setItems(cached.items);
        setError(null);
        setLoading(false);
      }
      return;
    }

    if (!inFlight) {
      inFlight = fetchUploads({ apiKey, uploadsPlaylistId })
        .then((fresh) => {
          writeCache(cacheKey, fresh);
          return fresh;
        })
        .finally(() => { inFlight = null; });
    }

    inFlight
      .then((fresh) => {
        if (!mounted.current) return;
        setItems(fresh);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted.current) return;
        // Prefer showing stale content over an error screen.
        if (cached) setItems(cached.items);
        else setError(err.message);
        setLoading(false);
      });
  }, [apiKey, cacheKey, configured, uploadsPlaylistId]);

  useEffect(() => {
    load();
    if (!configured) return;

    const tick = () => { if (!document.hidden) load(); };
    const timer = setInterval(tick, FETCH_INTERVAL_MS);
    document.addEventListener('visibilitychange', tick);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', tick);
    };
  }, [configured, load]);

  const live = items.find((item) => item.status === 'live') || null;
  const featured = live || items.find((item) => item.status !== 'upcoming') || null;
  const archive = items
    .filter((item) => item.status !== 'upcoming' && item.id !== featured?.id)
    .slice(0, archiveCount);

  return { loading, error, configured, live, featured, archive };
}
