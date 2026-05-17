import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO.jsx';

function NotFoundPage(){
    return(
        <>
            <SEO title="Page Not Found" description="This page seems to have wandered off." />
            <section className='not-found'>
                <div className="container-narrow text-center">
                <p className="not-found__eyebrow">404</p>
                <h1 className="not-found__title">This page seems to have wandered off.</h1>
                <p className="not-found__lead">
                    The link may be broken, or the page may have moved.
                </p>
                <div className="not-found__actions">
                    <Link to="/" className="btn-fibc">Back to home</Link>
                    <Link to="/contact" className="btn-fibc-outline">Tell us what you were looking for</Link>
                </div>
                </div>
            </section>

            <style>{`
                .not-found {
                padding: clamp(4rem, 12vw, 9rem) 0;
                background: var(--bg);
                }
                .not-found__eyebrow {
                font-family: var(--font-display);
                font-size: clamp(4rem, 14vw, 8rem);
                color: var(--accent);
                font-weight: 700;
                line-height: 1;
                margin: 0 0 var(--space-4);
                letter-spacing: -0.02em;
                }
                .not-found__title {
                font-family: var(--font-display);
                font-size: clamp(1.6rem, 4vw, 2.5rem);
                color: var(--brand);
                margin: 0 0 var(--space-4);
                }
                .not-found__lead {
                color: var(--text-muted);
                font-size: 1.1rem;
                line-height: 1.7;
                max-width: 520px;
                margin: 0 auto var(--space-6);
                }
                .not-found__actions {
                display: inline-flex;
                gap: var(--space-3);
                flex-wrap: wrap;
                justify-content: center;
                }
            `}</style>
        </>
    );
}

export default NotFoundPage;