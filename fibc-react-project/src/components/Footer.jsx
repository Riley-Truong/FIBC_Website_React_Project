import React from 'react';

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

export default Footer;