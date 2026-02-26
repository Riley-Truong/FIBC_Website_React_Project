import React from 'react';

function SermonsPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Recent Sermons</h1>
      <p className="lead mb-5">Watch or listen to our latest messages.</p>
      
      <div className="row g-4">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 bg-secondary d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                <i className="bi bi-play-circle display-1 text-white"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Walking by Faith, Not by Sight</h5>
                  <p className="card-text">
                    Explore what it means to trust God even when we can't see the path ahead. 
                    A powerful message about faith and surrender.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Pastor Randall Rickner • January 26, 2026 • 2 Corinthians 5:7</small>
                  </p>
                  <button className="btn btn-primary me-2">Watch</button>
                  <button className="btn btn-outline-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 bg-secondary d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                <i className="bi bi-play-circle display-1 text-white"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Power of Prayer</h5>
                  <p className="card-text">
                    Discover how prayer transforms our relationship with God and impacts our daily lives. 
                    Practical insights for a vibrant prayer life.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Pastor Randall Rickner • January 19, 2026 • James 5:16</small>
                  </p>
                  <button className="btn btn-primary me-2">Watch</button>
                  <button className="btn btn-outline-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 bg-secondary d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                <i className="bi bi-play-circle display-1 text-white"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Love Your Neighbor</h5>
                  <p className="card-text">
                    What does it really mean to love our neighbors in today's world? 
                    A challenging message about compassion and action.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Pastor John Smith • January 12, 2026 • Luke 10:27</small>
                  </p>
                  <button className="btn btn-primary me-2">Watch</button>
                  <button className="btn btn-outline-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>Want to Browse Our Sermon Archive?</h4>
        <p>Access hundreds of messages from our archives organized by series, topic, and speaker.</p>
        <button className="btn btn-primary btn-lg">View Sermon Archive</button>
      </div>
    </div>
  );
}

export default SermonsPage;