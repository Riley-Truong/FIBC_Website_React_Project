import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO.jsx';
import PageHero from '../components/shared/PageHero.jsx';
import SectionHeading from '../components/shared/SectionHeading.jsx';
import { services } from '../data/services.js';
import { specialEvents, calendar } from '../data/events.js';
import '../styles/EventsPage.css';

const EASE = [0.16, 1, 0.3, 1];

// Shared "fade + rise" entrance for cards as they scroll into view.
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

function EventsPage() {
  const lightboxRef = useRef(null);
  const [calendarOk, setCalendarOk] = useState(true);

  const openLightbox = () => lightboxRef.current?.showModal();
  const closeLightbox = () => lightboxRef.current?.close();

  return (
    <>
      <SEO
        title="Events"
        description="Weekly services, fellowship gatherings, and special events at Faith Independent Baptist Church."
      />

      <PageHero title="Events"/>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Recurring services"
          />

          <div className="events-grid">
            {services.map((day, i) => (
              <motion.div
                key={day.day}
                className="fibc-card event-card"
                {...fadeUp}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              >
                <h3 className="event-card__day">{day.day}</h3>
                <ul className="event-card__list">
                  {day.sessions.map((s) => (
                    <li key={s.name}>
                      <span className="event-card__time">{s.time}</span>
                      <span className="event-card__name">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            title="Special events"
          />

          <div className="special-grid">
            {specialEvents.map((e, i) => (
              <motion.article
                key={e.title}
                className="special-event"
                {...fadeUp}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              >
                <span className="special-event__when">{e.when}</span>
                <h3 className="special-event__title">{e.title}</h3>
                <p className="special-event__body">{e.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Calendar"
          />

          <motion.div className="events-calendar" {...fadeUp} transition={{ duration: 0.5, ease: EASE }}>
            {calendarOk ? (
              <button
                type="button"
                className="events-calendar__thumb"
                onClick={openLightbox}
                aria-label="Open the calendar full size"
              >
                <img
                  src={calendar.src}
                  alt={calendar.alt}
                  loading="lazy"
                  onError={() => setCalendarOk(false)}
                />
                <span className="events-calendar__zoom">Click to enlarge</span>
              </button>
            ) : (
              <div className="events-calendar__placeholder">
                <p className="events-calendar__placeholder-title">Our latest calendar will be posted here soon.</p>
                <p className="events-calendar__placeholder-note">
                  In the meantime, dates go out in the weekly bulletin and from the pulpit each Sunday.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <dialog
        ref={lightboxRef}
        className="events-lightbox"
        onClick={(e) => { if (e.target === lightboxRef.current) closeLightbox(); }}
      >
        <button
          type="button"
          className="events-lightbox__close"
          onClick={closeLightbox}
          aria-label="Close calendar"
        >
          ×
        </button>
        <img src={calendar.src} alt={calendar.alt} />
      </dialog>
    </>
  );
}

export default EventsPage;
