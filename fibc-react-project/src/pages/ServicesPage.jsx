import React from 'react';

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

export default ServicesPage;