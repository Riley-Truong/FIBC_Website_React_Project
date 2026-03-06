import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Faith Independent Baptist Church</h5>
            <p>A place of worship, community, and faith.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p>
              1099 Hwy 81 West<br />
              McDonough, GA 30253<br />
              Phone: (770) 957-9889<br />
              Email: office@fibcministries.com
            </p>
          </div>
          <div className="col-md-4">
            <h5>Service Times</h5>
            <p>
              Sunday<br />
              9:30am - Sunday School (all ages)<br />
              10:30am - Morning Service<br />
              10:30am - Children's Churches (K4-6th)<br />
              5:00pm -  Evening Service Wednesday<br />
              Wednesday<br />
              7:00pm - Midweek Service/Prayer<br />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <a href="https://youtube.com/channel/UCA2XmzXvAr0pLhzGSspAIOQ"  target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit our YouTube channel">
            <i className="bi bi-youtube fs-4"></i>
          </a>
        </div>
        <div className="text-center">
          <p>&copy; 2026 Faith Independent Baptist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;