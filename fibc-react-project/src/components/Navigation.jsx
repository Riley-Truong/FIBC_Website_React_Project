import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav className="text-center justify-content-center navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-brand" to="/">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-church me-2"></i>
                    Faith Independent Baptist Church
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/ministries">Ministries</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sermons">Sermons</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;