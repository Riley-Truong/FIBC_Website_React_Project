import {motion} from 'framer-motion';
import '../../styles/PageHero.css';

function PageHero({eyebrow, title, subtitle, variant = 'default', backgroundImage}) {
    return(
        <section 
            className={`page-hero page-hero--${variant}`}
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } : undefined}
            >
            <div className="container-base">
                <motion.div className="page-hero__inner" initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}>
                    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
                    <h1 className="page-hero__title">{title}</h1>
                    {subtitle && <p className="page-hero__subtitle lead">{subtitle}</p>}
                </motion.div>
            </div>
        </section>
    )
}

export default PageHero;