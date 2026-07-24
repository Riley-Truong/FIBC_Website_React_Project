import{ useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import fibcLogo from '../assets/fibc-logo.png';
import '../styles/Navigation.css';

const NAV_GROUPS = [
    {
        label: 'About',
        items: [
            { to: '/about', label: 'Our Church'},
            { to: '/staff', label: 'Pastor & Staff'},
            { to: '/beliefs', label: 'What We Believe'},
            { to: '/faq', label: 'FAQ'},
        ],
    },
    {
        label: 'Visit',
        items: [
            { to: '/visit', label: 'Plan Your Visit'},
            { to: '/services', label: 'Service Times'},
            { to: '/salvation', label: 'Salvation'},
            { to: '/next-steps', label: 'Next Steps'},
        ],
    },
];

const NAV_LINKS = [
    { to: '/ministries', label: 'Ministries' },
    { to: '/sermons', label: 'Sermons' },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact' },
];

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const drawerRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setDrawerOpen(false); setOpenDropdown(null); }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [drawerOpen]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') { setOpenDropdown(null); setDrawerOpen(false); } };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return(
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      <header className={`fibc-nav ${scrolled ? 'fibc-nav--scrolled' : ''}`}>
        <div className="container-wide fibc-nav__inner">
          <Link to="/" className="fibc-nav__brand" aria-label="Faith Independent Baptist Church home">
            <img
              src={fibcLogo}
              alt=""
              className="fibc-nav__brand-mark"
              width="800"
              height="262"
            />
          </Link>

          <nav className="fibc-nav__desktop" aria-label="Primary">
            <ul className="fibc-nav__list">
              <li>
                <NavLink to="/" end className={({isActive}) => `fibc-nav__link ${isActive ? 'is-active' : ''}`}>
                  {({ isActive }) => (
                    <>
                      Home
                      {isActive && (
                        <motion.span layoutId="nav-indicator" className="fibc-nav__indicator" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} />
                      )}
                    </>
                  )}
                </NavLink>    
              </li>

              {NAV_GROUPS.map(group => (
                <li key={group.label} className="fibc-nav__dropdown">
                  <button
                    className="fibc-nav__link fibc-nav__dropdown-trigger"
                    aria-expanded={openDropdown === group.label}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                  >
                    {group.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === group.label && (
                      <motion.ul
                        className="fibc-nav__dropdown-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {group.items.map(item => (
                          <li key={item.to}>
                            <NavLink
                              to={item.to}
                              className={({isActive}) => `fibc-nav__dropdown-item ${isActive ? 'is-active' : ''}`}
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}

                {NAV_LINKS.map(link => (
                  <li key={link.to}>
                    <NavLink to={link.to} className={({isActive}) => `fibc-nav__link ${isActive ? 'is-active' : ''}`}>
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {isActive && (
                            <motion.span layoutId="nav-indicator" className="fibc-nav__indicator" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}

            </ul>

            <Link to="/giving" className="btn-fibc fibc-nav__cta">Give</Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`fibc-nav__hamburger ${drawerOpen ? 'is-open' : ''}`}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fibc-nav__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              ref={drawerRef}
              id="mobile-drawer"
              className="fibc-nav__drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile navigation"
            >
              <nav className="fibc-nav__drawer-content">
                <NavLink to="/" end className="fibc-nav__drawer-link">Home</NavLink>

                {NAV_GROUPS.map(group => (
                  <details key={group.label} className="fibc-nav__drawer-group">
                    <summary className="fibc-nav__drawer-link">{group.label}</summary>
                    <div className="fibc-nav__drawer-sub">
                      {group.items.map(item => (
                        <NavLink key={item.to} to={item.to} className="fibc-nav__drawer-sublink">
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </details>
                ))}

                {NAV_LINKS.map(link => (
                  <NavLink key={link.to} to={link.to} className="fibc-nav__drawer-link">
                    {link.label}
                  </NavLink>
                ))}

                <Link to="/giving" className="btn-fibc btn-fibc--inverse fibc-nav__cta">Give</Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;