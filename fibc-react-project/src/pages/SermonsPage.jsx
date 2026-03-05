import React, {useState, useEffect} from 'react';
import '../styles/SermonStyle.css';

function SermonsPage() {
  const [videos, setVideos] = useState([]);
  const [liveStream, setLiveStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const YOUTUBE_CHANNEL_ID = 'UCA2XmzXvAr0pLhzGSspAIOQ'
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const MAX_RESULTS = 6;
  

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try{
      setLoading(true);
      setError(null);
      await Promise.all([
        fetchRecentVideos(),
        fetchLiveStream()
      ]);
    } catch(err){
      console.error('Failed to fetch videos: ', err);
      setError('Unable to load sermons at this time. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?` +
      `key=${API_KEY}` +
      `&channelId=${YOUTUBE_CHANNEL_ID}` +
      `&part=snippet,id` +
      `&order=date` +
      `&maxResults=${MAX_RESULTS}` +
      `&type=video`;
      const response = await fetch(url);
    if(!response.ok){
      throw new Error(`Failed to fetch recent videos: ${response.statusText}`);
    }
    const data = await response.json();

    if(data.items){
      setVideos(data.items);
    }
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const fetchLiveStream = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?` +
      `key=${API_KEY}` +
      `&channelId=${YOUTUBE_CHANNEL_ID}` +
      `&part=snippet,id` +
      `&eventType=live` +
      `&type=video` +
      `&maxResults=1`;    
      const response = await fetch(url);
    if(!response.ok){
      throw new Error(`Failed to fetch live stream: ${response.statusText}`);
    }
    const data = await response.json();
    if(data.items && data.items.length > 0){
      setLiveStream(data.items[0]);
    }else{
      setLiveStream(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading video...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            Error Loading Videos
          </h4>
          <p>{error}</p>
          <hr />
          <button className="btn btn-outline-danger" onClick={fetchVideos}>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Recent Sermons</h1>
      <p className="lead mb-5">Watch our latest messages.</p>
      {liveStream && (
        <div className="mb-5">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white">
              <div className="d-flex align-items-center">
                <span className="badge bg-white text-danger me-2 pulse-animation">
                  <i className="bi bi-broadcast"></i> LIVE NOW
                </span>
                <h4 className="mb-0">{liveStream.snippet.title}</h4>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${liveStream.id.videoId}?autoplay=1`}
                  title={liveStream.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="card-footer">
              <p className="mb-0 text-muted">
                <i className="bi bi-clock"></i> Started: {formatDate(liveStream.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      )}
      {videos.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <i className="bi bi-info-circle me-2"></i>
          No sermons available at this time. Check back soon!
        </div>
      ) : (
        <div className="row g-4">
          {videos.map((video) => (
            <div key={video.id.videoId} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm video-card">
                <div className="position-relative video-thumbnail" onClick={() => openVideoModal(video)} style={{ cursor: 'pointer' }}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    className="card-img-top"
                    alt={video.snippet.title}
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="video-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-circle-fill text-white display-1"></i>
                  </div>
                </div>

                <div className="card-body d-flex flex-column">
                  <p className="card-title">{video.snippet.title}</p>
                  <p className="card-text text-muted small flex-grow-1">
                    {video.snippet.description.substring(0, 100)}
                    {video.snippet.description.length > 100 ? '...' : ''}
                  </p>
                  <p className="card-text mb-3">
                    <small className="text-muted">
                      <i className="bi"></i> {formatDate(video.snippet.publishedAt)}
                    </small>
                  </p>

                  <div className="d-flex gap-2 mt-auto">
                    <button
                      className="btn btn-primary btn-sm flex-grow-1"
                      onClick={() => openVideoModal(video)}
                    >
                      <i className="bi bi-play-fill"></i> Watch Here
                    </button>
                  </div>                
                </div>
              </div>
              {selectedVideo && (
                <div 
                  className="modal fade show video-modal-wide"
                  style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
                  onClick={closeVideoModal}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5>{selectedVideo.snippet.title}</h5>
                        <button className="btn-close" onClick={closeVideoModal}></button>
                      </div>
                      
                      <div className="modal-body p-0">
                        <div className="video-container-constrained">
                          <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                            allowFullScreen
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '82%',
                              border: 'none',
                            }}
                          ></iframe>
                        </div>
                      </div>
                      
                      <div className="modal-footer">
                        <small className="text-muted me-auto">
                          <i className="bi bi-calendar3"></i> {formatDate(selectedVideo.snippet.publishedAt)}
                        </small>
                        <a
                          href={`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Open in YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}           
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-5">
        <h4>Sermon Archive</h4>
        <a
          href={`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}/videos`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          <i className="bi bi-youtube me-2"></i>
          View Full Archive on YouTube
        </a>
      </div>
    </div>
  );
}

export default SermonsPage;