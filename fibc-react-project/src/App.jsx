import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-church me-2"></i>
          Grace Community Church
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ministries">Ministries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sermons">Sermons</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Grace Community Church</h5>
            <p>A place of worship, community, and faith.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p>
              123 Faith Street<br />
              Your City, ST 12345<br />
              Phone: (555) 123-4567<br />
              Email: info@gracechurch.org
            </p>
          </div>
          <div className="col-md-4">
            <h5>Service Times</h5>
            <p>
              Sunday: 9:00 AM & 11:00 AM<br />
              Wednesday: 7:00 PM<br />
              Prayer Meeting: Fridays 6:30 PM
            </p>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <p>&copy; 2024 Grace Community Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div>
      <div className="bg-primary text-white text-center py-5" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Welcome to Faith Independent Baptist Church</h1>
          <p className="lead mb-4">Join us in worship, fellowship, and service</p>
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

function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-8">
          <h3>Our Story</h3>
          <p className="lead">
            Grace Community Church was founded in 1985 with a vision to create a welcoming space where people could encounter God's love and grow in their faith.
          </p>
          <p>
            For nearly four decades, we've been serving our community through worship, outreach, and discipleship. Our church family is diverse, vibrant, and committed to following Jesus together.
          </p>
          
          <h3 className="mt-5">Our Beliefs</h3>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">We believe in the Trinity: Father, Son, and Holy Spirit</li>
            <li className="list-group-item">We believe in the authority of Scripture</li>
            <li className="list-group-item">We believe in salvation through faith in Jesus Christ</li>
            <li className="list-group-item">We believe in the power of prayer and the work of the Holy Spirit</li>
            <li className="list-group-item">We believe in the Great Commission to share the Gospel</li>
          </ul>

          <h3 className="mt-5">Our Leadership</h3>
          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5>Pastor John Smith</h5>
                  <p className="text-muted">Lead Pastor</p>
                  <p>Serving since 2010</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5>Pastor Sarah Johnson</h5>
                  <p className="text-muted">Associate Pastor</p>
                  <p>Serving since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h4>Visit Us</h4>
              <p>We'd love to have you join us for worship!</p>
              <Link to="/contact" className="btn btn-light">Plan Your Visit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Service Times</h1>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Sunday Morning Worship</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">9:00 AM - Traditional Service</h5>
              <p className="card-text">
                Our traditional service features hymns, organ music, and expository preaching.
              </p>
              <h5 className="card-title mt-4">11:00 AM - Contemporary Service</h5>
              <p className="card-text">
                Our contemporary service includes modern worship music and multimedia presentations.
              </p>
              <p className="mt-3"><strong>Childcare available for both services</strong></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Wednesday Evening</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">7:00 PM - Bible Study & Prayer</h5>
              <p className="card-text">
                Join us for in-depth Bible study and corporate prayer. Groups available for all ages.
              </p>
              <ul className="mt-3">
                <li>Adult Bible Study</li>
                <li>Youth Group (Grades 6-12)</li>
                <li>Children's Program</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Friday Prayer Meeting</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">6:30 PM - Prayer Gathering</h5>
              <p className="card-text">
                Come together with fellow believers to pray for our church, community, and world.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Special Services</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">Monthly & Seasonal Events</h5>
              <ul>
                <li>First Sunday: Communion Service</li>
                <li>Easter & Christmas: Special Services</li>
                <li>Monthly: Family Night Dinners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-info mt-5">
        <h4>What to Expect</h4>
        <p className="mb-0">
          Whether you're visiting for the first time or returning, you can expect warm hospitality, 
          relevant teaching from God's Word, and an opportunity to connect with others. Come as you are - 
          casual dress is perfectly fine!
        </p>
      </div>
    </div>
  );
}

function MinistriesPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Our Ministries</h1>
      <p className="lead mb-5">Get involved and grow in your faith through our various ministry opportunities.</p>
      
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Children's Ministry</h4>
              <p className="card-text">
                Nurturing young hearts with Bible stories, worship, and age-appropriate activities. 
                Programs for infants through 5th grade.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Youth Ministry</h4>
              <p className="card-text">
                Empowering students in grades 6-12 to live out their faith through weekly gatherings, 
                mission trips, and community service.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Worship Team</h4>
              <p className="card-text">
                Using our musical gifts to lead the congregation in worship. Opportunities for vocalists 
                and instrumentalists.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Women's Ministry</h4>
              <p className="card-text">
                Bible studies, fellowship events, and service opportunities designed to help women 
                grow spiritually and build community.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Men's Ministry</h4>
              <p className="card-text">
                Building godly men through accountability groups, service projects, and monthly 
                breakfast gatherings.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Outreach & Missions</h4>
              <p className="card-text">
                Serving our local community and supporting global missions. Food pantry, community 
                events, and mission trips.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Small Groups</h4>
              <p className="card-text">
                Connect with others in intimate settings for Bible study, prayer, and authentic 
                Christian fellowship throughout the week.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Seniors Ministry</h4>
              <p className="card-text">
                Fellowship and spiritual growth for our senior adults through luncheons, day trips, 
                and Bible studies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Hospitality Team</h4>
              <p className="card-text">
                Creating a welcoming environment through greeting, ushering, and serving refreshments 
                to guests and members.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3>Want to Get Involved?</h3>
        <p>We'd love to help you find the right ministry fit for you!</p>
        <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
      </div>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Upcoming Events</h1>
      
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">This Week</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Sunday Worship Services</h5>
              <p className="card-text"><strong>Date:</strong> Every Sunday</p>
              <p className="card-text"><strong>Time:</strong> 9:00 AM & 11:00 AM</p>
              <p className="card-text">Join us for inspiring worship and biblical teaching.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Coming Up</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Family Movie Night</h5>
              <p className="card-text"><strong>Date:</strong> Friday, February 7th</p>
              <p className="card-text"><strong>Time:</strong> 6:30 PM</p>
              <p className="card-text">Bring the whole family for a fun evening with popcorn and a family-friendly film!</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">This Month</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Men's Breakfast</h5>
              <p className="card-text"><strong>Date:</strong> Saturday, February 15th</p>
              <p className="card-text"><strong>Time:</strong> 8:00 AM</p>
              <p className="card-text">Monthly gathering for fellowship, food, and encouragement. All men welcome!</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Special Event</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Marriage Enrichment Seminar</h5>
              <p className="card-text"><strong>Date:</strong> February 21-22</p>
              <p className="card-text"><strong>Time:</strong> Friday 7PM, Saturday 9AM-4PM</p>
              <p className="card-text">Strengthen your marriage through biblical teaching and practical tools. Registration required.</p>
              <button className="btn btn-primary btn-sm">Register Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Community Outreach</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Food Pantry Distribution</h5>
              <p className="card-text"><strong>Date:</strong> Every 2nd & 4th Saturday</p>
              <p className="card-text"><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
              <p className="card-text">Volunteers needed to help serve our community. Sign up in the lobby!</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Save the Date</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Easter Sunday Service</h5>
              <p className="card-text"><strong>Date:</strong> April 20th</p>
              <p className="card-text"><strong>Time:</strong> 9:00 AM & 11:00 AM</p>
              <p className="card-text">Celebrate the resurrection with us! Special music and inspiring message.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-success mt-5">
        <h4>Stay Connected!</h4>
        <p className="mb-0">
          Sign up for our weekly newsletter to receive updates about upcoming events, service opportunities, 
          and important announcements.
        </p>
      </div>
    </div>
  );
}

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
                    <small className="text-muted">Pastor John Smith • January 26, 2026 • 2 Corinthians 5:7</small>
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
                    <small className="text-muted">Pastor Sarah Johnson • January 19, 2026 • James 5:16</small>
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

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <p className="lead">We'd love to hear from you! Fill out the form and we'll respond as soon as possible.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name *</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email *</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject *</label>
              <select className="form-select" id="subject" required>
                <option value="">Choose...</option>
                <option value="general">General Inquiry</option>
                <option value="prayer">Prayer Request</option>
                <option value="visit">Planning a Visit</option>
                <option value="ministry">Ministry Information</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
          </form>
        </div>
        
        <div className="col-md-6">
          <h3>Visit Us</h3>
          
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                Location
              </h5>
              <p className="card-text">
                Grace Community Church<br />
                123 Faith Street<br />
                Your City, ST 12345
              </p>
              <button className="btn btn-outline-primary btn-sm">Get Directions</button>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                Phone
              </h5>
              <p className="card-text">
                Office: (555) 123-4567<br />
                Prayer Line: (555) 123-4568
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                Email
              </h5>
              <p className="card-text">
                General: info@gracechurch.org<br />
                Pastor: pastor@gracechurch.org
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-clock-fill text-primary me-2"></i>
                Office Hours
              </h5>
              <p className="card-text">
                Monday - Thursday: 9:00 AM - 4:00 PM<br />
                Friday: 9:00 AM - 12:00 PM<br />
                Closed weekends
              </p>
            </div>
          </div>

          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">First Time Visitor?</h5>
              <p className="card-text">
                We can't wait to meet you! When you arrive, look for our welcome team members 
                who will help you find parking, childcare check-in, and answer any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/sermons" element={<SermonsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;