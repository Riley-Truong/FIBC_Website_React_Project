import React from 'react';

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
                Faith Independent Baptist Church<br />
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

export default ContactPage;