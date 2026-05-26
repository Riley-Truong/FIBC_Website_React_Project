import SEO from '../components/shared/SEO';
import PageHero from '../components/shared/PageHero';
import {staff} from '../data/staff';
import {motion} from 'framer-motion';
import '../styles/StaffPage.css';

function StaffPage() {
    return(
        <>
            <SEO title="Pastor & Staff" description="Meet the pastor and ministry team at Faith Independent Baptist Church in McDonough, GA."/>
            <PageHero eyebrow="Staff" title="Pastor & Staff" subtitle="The men and woment who serve, teach, and sheperd here at Faith Independent Baptist Church."/>
                
            <section>
                <div className="container-base">
                    <motion.div className="staff-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } }, }}>
                        {staff.map(person => (
                            <motion.article key={person.id} className="staff-card" variants={{hidden: {opacity: 0, y: 16}, show: {opacity: 1, y: 1, transition: {duration: 0.6, ease: [0.16,1,0.3,1]}},}}>
                                <div className="staff-card__avatar" aria-hidden="true">
                                    {person.image ? <img src={person.image} alt={person.name} /> : <span>{person.initials}</span>}
                                </div>
                                <div className="staff-card__body">
                                    <p className="eyebrow">{person.role}</p>
                                    <h2 className="staff-card__name">{person.name}</h2>
                                    {person.bio.map((paragraph, index) => (
                                        <p key={index} className="staff-card__bio">{paragraph}</p>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default StaffPage;