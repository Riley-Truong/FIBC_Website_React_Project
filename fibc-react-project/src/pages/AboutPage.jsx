import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-8">
          <h3>Our Story</h3>
          <p className="lead">
            Faith Independent Baptist Church was founded in 1985 with a vision to create a welcoming space where people could encounter God's love and grow in their faith.
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

export default AboutPage;