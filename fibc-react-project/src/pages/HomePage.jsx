import React from 'react';
import {Link} from 'react-router-dom';
import fibcLogo from '../assets/fibc-logo-white-rust-383w.png'

function HomePage() {
    return(
    <div>
      <div className="text-white text-center py-5" style={{ backgroundColor: '#0d3b68', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <img src={fibcLogo} alt="fibc-logo-png" />
          <p className="lead mb-4" style={{ padding: '35px 5px 10px 5px' }}>Join us in worship, fellowship, and service</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/services" className="btn btn-light btn-lg">Join Our Services</Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">Plan Your Visit</Link>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-calendar-event display-4 text-primary mb-3"></i>
                <h4 className="card-title">Upcoming Events</h4>
                <p className="card-text">Stay connected with our church community through various events and gatherings.</p>
                <Link to="/events" className="btn btn-primary">View Events</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-people display-4 text-primary mb-3"></i>
                <h4 className="card-title">Our Ministries</h4>
                <p className="card-text">Discover ways to serve and grow in your faith through our various ministries.</p>
                <Link to="/ministries" className="btn btn-primary">Explore Ministries</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-play-circle display-4 text-primary mb-3"></i>
                <h4 className="card-title">Latest Sermons</h4>
                <p className="card-text">Watch or listen to our latest messages and grow in your spiritual journey.</p>
                <Link to="/sermons" className="btn btn-primary">Watch Sermons</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead">
                To know Christ and make Him known through worship, discipleship, and service to our community and the world.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="col-md-6">
              <div className="bg-primary text-white p-4 rounded">
                <h4 className="mb-3">New Here?</h4>
                <p>We'd love to meet you! Join us this Sunday and experience our warm, welcoming community.</p>
                <Link to="/contact" className="btn btn-light">Get Directions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default HomePage;