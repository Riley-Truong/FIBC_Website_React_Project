import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min";  
import { useNavigate, Link } from 'react-router-dom';
import './App.css'
import aboutPage from './aboutPage.jsx';


function NavBar() {
    const navigate = useNavigate();
    return(
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderBottom: '2px solid #ddd' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button onClick={() => navigate('/')}>
                    Home
                </button>
                <button onClick={() => navigate('/about')}>
                    About Us
                </button>
                <button onClick={() => navigate('/services')}>
                    Services
                </button>
                <button onClick={() => navigate('/contact')}>
                    Contact
                </button>
            </div>
        </div>
    );
}

export function AboutPage() {
    return(
    <div className="title">
        <h1>About Page</h1>
        <h1>About Page</h1>
        <h1>About Page</h1>
        <h1>About Page</h1>
        <h1>About Page</h1>
    </div>

    );
}

export function ServicesPage() {
    return <div className="title"><h1>Service Page</h1></div>;
}

export function ContactPage() {
    return <div className="title"><h1>Contact Page</h1></div>;
}

export default NavBar; // Export the component, not NavBar()