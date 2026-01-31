import React from 'react';

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

export default EventsPage;