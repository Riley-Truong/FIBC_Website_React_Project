import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fibc-footer">
      <div className="container-wide">
        <div className="fibc-footer__grid">
          <div className="fibc-footer__col fibc-footer__col--brand">
            <div className="fibc-footer__brand">
              <span className="fibc-footer__brand-mark" aria-hidden="true">F</span>
              <div>
                <div className="fibc-footer__brand-name">Faith Independent</div>
                <div className="fibc-footer__brand-sub">Baptist Church</div>
              </div>
            </div>
            <p className="fibc-footer__tag">
              A Bible-believing, family-centered church serving McDonough and the
              greater Henry County community.
            </p>

            <address className="fibc-footer__address">
              <strong>Faith Independent Baptist Church</strong><br />
              1099 Hwy 81 West<br />
              McDonough, GA 30253<br />
              <a href="tel:+17709579889">(770) 957-9889</a><br />
              <a href="mailto:office@fibcmcdonough.org">office@fibcmcdonough.org</a>
            </address>
          </div>

          <div className="fibc-footer__col">
            <h4 className="fibc-footer__heading">About</h4>
            <ul className="fibc-footer__list">
              <li><Link to="/about">Our Church</Link></li>
              <li><Link to="/staff">Pastor &amp; Staff</Link></li>
              <li><Link to="/beliefs">What We Believe</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="fibc-footer__col">
            <h4 className='fibc-footer__heading'>Visit</h4>
            <ul className='fibc-footer__list'>
              <li><Link to="/visit">Plan Your Visit</Link></li>
              <li><Link to="/services">Service Times</Link></li>
              <li><Link to="/salvation">Salvation</Link></li>
              <li><Link to="/next-steps">Next Steps</Link></li>
            </ul>
          </div>

          <div className="fibc-footer__col">
            <h4 className="fibc-footer__heading">Connect</h4>
            <ul className="fibc-footer__list">
              <li><Link to="/ministries">Ministries</Link></li>
              <li><Link to="/sermons">Sermons</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/giving">Give</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="fibc-footer__bottom">
          <p className="fibc-footer__copy">
            &copy; {year} Faith Independent Baptist Church. All rights reserved.
          </p>
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