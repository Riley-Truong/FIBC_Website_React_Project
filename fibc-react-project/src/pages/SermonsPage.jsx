import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO.jsx';
import PageHero from '../components/shared/PageHero.jsx';
import SectionHeading from '../components/shared/SectionHeading.jsx';
import { useYouTubeVideos, CHANNEL_URL } from '../hooks/youtube_videos_hook.js';
import '../styles/SermonsPage.css';

const EASE = [0.16, 1, 0.3, 1];

// Shared "fade + rise" entrance for cards as they scroll into view.
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

/** How many past messages to list beneath the player. */
const ARCHIVE_COUNT = 6;

const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
// nocookie spares visitors YouTube's tracking cookies until they hit play.
const embedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?rel=0`;

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

/** 4530 → "1:15:30", 2712 → "45:12". Empty for live streams, which report 0. */
function formatDuration(totalSeconds) {
  if (!totalSeconds) return '';
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

function YouTubeIcon() {
  return (
    <svg className="sermons-yt-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

/** Link out to the church's channel. Used in the hero and in the empty states. */
function ChannelButton({ variant = 'btn-fibc', children = 'Visit our YouTube channel' }) {
  return (
    <a
      className={`${variant} sermons-channel-btn`}
      href={CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <YouTubeIcon />
      {children}
    </a>
  );
}

/** The big player at the top: the live broadcast when we're on the air,
 *  otherwise the most recent message. */
function FeaturedPlayer({ video, isLive }) {
  return (
    <motion.div
      className="sermon-feature"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="sermon-feature__frame">
        <iframe
          src={embedUrl(video.id)}
          title={video.title || (isLive ? 'Live service' : 'Latest sermon')}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="sermon-feature__meta">
        <span className={`sermon-feature__status${isLive ? ' sermon-feature__status--live' : ''}`}>
          {isLive ? <><span className="sermon-feature__dot" aria-hidden="true" />Live now</> : 'Latest message'}
        </span>

        <h2 className="sermon-feature__title">{video.title}</h2>

        {!isLive && video.publishedAt && (
          <p className="sermon-feature__date">{formatDate(video.publishedAt)}</p>
        )}

        <a
          className="btn-fibc-outline sermons-channel-btn"
          href={watchUrl(video.id)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
          Watch on YouTube
        </a>
      </div>
    </motion.div>
  );
}

function SermonCard({ video, index }) {
  const thumb = video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const duration = formatDuration(video.durationSeconds);
  const date = formatDate(video.publishedAt);

  return (
    <motion.a
      href={watchUrl(video.id)}
      target="_blank"
      rel="noopener noreferrer"
      className="sermon-card"
      {...fadeUp}
      transition={{ duration: 0.5, ease: EASE, delay: (index % 3) * 0.05 }}
    >
      <div className="sermon-card__thumb">
        <img src={thumb} alt="" loading="lazy" />
        {duration && <span className="sermon-card__duration">{duration}</span>}
        <span className="sermon-card__play" aria-hidden="true">
          <YouTubeIcon />
        </span>
      </div>

      <div className="sermon-card__body">
        {date && <span className="sermon-card__date">{date}</span>}
        <h3 className="sermon-card__title">{video.title}</h3>
      </div>
    </motion.a>
  );
}

/** Shared shell for the loading / error / unconfigured / empty states. */
function SermonsNotice({ eyebrow, title, children }) {
  return (
    <div className="sermons-notice">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="sermons-notice__title">{title}</h2>
      {children}
    </div>
  );
}

function SermonsPage() {
  const { loading, error, configured, live, featured, archive } =
    useYouTubeVideos({ archiveCount: ARCHIVE_COUNT });

  const isLive = Boolean(live);

  return (
    <>
      <SEO
        title="Sermons"
        description="Watch live services and recent sermons from Faith Independent Baptist Church. Bible-centered preaching from God's Word."
      />

      <PageHero
        title="Sermons"
      />

      <section className="section">
        <div className="container-base">
          {!configured && (
            <SermonsNotice eyebrow="Coming soon" title="Sermon archive is being prepared.">
              <p>
                Recent messages will appear here shortly. In the meantime, every service
                is posted to our YouTube channel.
              </p>
              <ChannelButton />
            </SermonsNotice>
          )}

          {configured && loading && (
            <SermonsNotice eyebrow="Loading" title="Pulling the latest messages…" />
          )}

          {configured && !loading && error && (
            <SermonsNotice eyebrow="Trouble loading" title="We couldn't load sermons right now.">
              <p>Please try again in a moment, or watch directly on our channel.</p>
              <ChannelButton />
            </SermonsNotice>
          )}

          {configured && !loading && !error && !featured && (
            <SermonsNotice eyebrow="No sermons yet" title="Check back soon.">
              <p>Messages will be posted here as they're recorded.</p>
              <ChannelButton />
            </SermonsNotice>
          )}

          {configured && !loading && !error && featured && (
            <FeaturedPlayer video={featured} isLive={isLive} />
          )}
        </div>
      </section>

      {configured && !loading && !error && archive.length > 0 && (
        <section className="section section--alt">
          <div className="container-base">
            <SectionHeading
              title="Recent messages"
            />

            <div className="sermons-grid">
              {archive.map((video, i) => (
                <SermonCard key={video.id} video={video} index={i} />
              ))}
            </div>

            <div className="sermons-more">
              <ChannelButton>Browse all sermons</ChannelButton>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SermonsPage;
