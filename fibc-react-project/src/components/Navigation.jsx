import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationStyle.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0d3b68'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    <i className="bi bi-church me-2"></i>
                    Faith Independent Baptist Church
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/about" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/services" onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/ministries" onClick={closeMenu}>
                                Ministries
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/events" onClick={closeMenu}>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/sermons" onClick={closeMenu}>
                                Sermons
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated" to="/contact" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-animated nav-link-give" to="/giving" onClick={closeMenu}>
                                Give
                            </Link>
                        </li>
                    </ul>
                    <div className="ms-3">
                        <a href="https://youtube.com/channel/UCA2XmzXvAr0pLhzGSspAIOQ"  target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit our YouTube channel">
                            <i className="bi bi-youtube fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;