import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Navigation() {
    return(
        <nav className="text-center justify-content-center navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0d3b68'}}>
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
                    <li className="nav-item">
                    <Link className="nav-link" to="/giving">Give</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="">
                <div>
                    <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='https://youtube.com/channel/UCA2XmzXvAr0pLhzGSspAIOQ'>
                        <MDBIcon fab icon='youtube' />
                    </MDBBtn>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;