import { Link } from 'react-router-dom';
import fibcLogo from '../assets/fibc-logo.png';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fibc-footer">
      <div className="container-wide">
        <div className="fibc-footer__grid">
          <div className="fibc-footer__col fibc-footer__col--brand">
            <div className="fibc-footer__brand">
              <img
                src={fibcLogo}
                alt="Faith Independent Baptist Church"
                className="fibc-footer__logo"
                width="800"
                height="262"
              />
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
            </ul>
          </div>
        </div>
        
        <div className="fibc-footer__bottom">
          <p className="fibc-footer__copy">
            &copy; {year} Faith Independent Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;