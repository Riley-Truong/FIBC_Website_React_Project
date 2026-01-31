import React from 'react';
import { Link } from 'react-router-dom';

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

export default MinistriesPage;