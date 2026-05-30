import {useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ministries } from '../data/ministries';
import {motion} from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import '../styles/MinistriesPage.css';

function MinistriesPage() {
  const dialogRef = useRef(null);
  const [activeMinistry, setActiceMinistry] = useState(null);

  const openModal = (ministry) => {
    setActiceMinistry(ministry);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const handleDialogClose = () => {
    setActiceMinistry(null);
  };

  const handleDialogClick = (e) => {
    if(e.target === dialogRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    if(activeMinistry){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMinistry]);

  return (
    <>
    <SEO title="Ministries" description="Discover the ministries at Faith Independent Baptist Church"/>
    <PageHero section="Get Involved" title="A Place For You" subtitle="The Christian life was never meant to be lived alone. Here's where you can grow, serve, and belong."/>

      <section className="ministries-section">
        <div className="container-base">
          <motion.div className="ministries-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } }, }}>
            {ministries.map((ministry) => (
              <motion.article key={ministry.id} className="ministry-card" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },},}}>
                <div className="ministry-card__media">
                  <img src={ministry.image} alt="" loading="lazy" />
                </div>
                <div className="ministry-card__body">
                  <h2 className="ministry-card__title">{ministry.name}</h2>
                  <button type="button" className="btn-fibc btn-fibc--secondary ministry-card__button" onClick={() => openModal(ministry)} aria-label={`See description of ${ministry.name}`}>
                    See Description
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <dialog ref={dialogRef} className="ministry-modal" onClick={handleDialogClick} onClose={handleDialogClose} aria-labelledby="ministry-modal-title" >
        {activeMinistry && (
          <div className="ministry-modal__content">
            <button type="button" className="ministry-modal__close" onClick={closeModal}  aria-label="Close">
              ×
            </button>

            <div className="ministry-modal__header">
              <img src={activeMinistry.image} alt="" className="ministry-modal__image"
              />
            </div>

            <div className="ministry-modal__body">
              <h2 id="ministry-modal-title" className="ministry-modal__title">
                {activeMinistry.name}
              </h2>
              {activeMinistry.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </dialog>
      </>
  );
}

export default MinistriesPage;