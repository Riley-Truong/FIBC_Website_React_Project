import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO.jsx';
import '../styles/NotFoundPage.css';

function NotFoundPage(){
    return(
        <>
            <SEO title="Page Not Found" description="This page seems to have wandered off." />
            <section className='not-found'>
                <div className="container-narrow text-center">
                <p className="not-found__eyebrow">404</p>
                <h1 className="not-found__title">This page seems to have wandered off.</h1>
                <div className="not-found__actions">
                    <Link to="/" className="btn-fibc">Back to home</Link>
                </div>
                </div>
            </section>
        </>
    );
}

export default NotFoundPage;