import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { highlights } from '../data/highlights';
import '../styles/HighlightsCarousel.css';

const AUTOPLAY_MS = 6000;
const EASE = [0.16, 1, 0.3, 1];

// Slide in from the side we're heading toward, exit to the opposite side.
const slide = {
  enter: (dir) => ({ opacity: 0, x: dir >= 0 ? 64 : -64 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir >= 0 ? -64 : 64 }),
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

function HighlightsCarousel() {
  const count = highlights.length;
  // `page` climbs/descends freely; the visible slide is page mod count.
  const [[page, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  const active = ((page % count) + count) % count;

  const paginate = useCallback((dir) => {
    setPage(([p]) => [p + dir, dir]);
  }, []);

  const goTo = useCallback((target) => {
    setPage(([p]) => {
      const current = ((p % count) + count) % count;
      return [target, target >= current ? 1 : -1];
    });
  }, [count]);

  useEffect(() => {
    if (paused || reduced || count <= 1) return undefined;
    const id = setInterval(() => setPage(([p]) => [p + 1, 1]), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduced, count, page]);

  if (count === 0) return null;
  const item = highlights[active];

  return (
    <section
      className="highlights"
      aria-roledescription="carousel"
      aria-label="What's happening at FIBC"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-base">
        <div className="highlights__head">
          <span className="eyebrow">Stay Connected</span>
          <h2 className="highlights__title">What&rsquo;s Happening</h2>
        </div>

        <div className="highlights__viewport">
          <div className="highlights__stage">
            <AnimatePresence initial={false} custom={direction}>
              <motion.article
              key={item.id}
              className="highlights__card"
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduced ? 0 : 0.45, ease: EASE }}
              drag={count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
              aria-roledescription="slide"
              aria-label={`${active + 1} of ${count}: ${item.title}`}
            >
              <div className="highlights__body">
                <h3 className="highlights__card-title">{item.title}</h3>
                <p className="highlights__text">{item.text}</p>
                {item.ctaTo && (
                  <Link to={item.ctaTo} className="btn-fibc-outline highlights__cta">
                    {item.ctaLabel || 'Learn more'}
                  </Link>
                )}
              </div>
              <div
                className={`highlights__media${item.image ? '' : ' highlights__media--blank'}`}
                aria-hidden="true"
              >
                {item.image ? (
                  <img src={item.image} alt="" draggable="false" />
                ) : (
                  <span className="highlights__monogram">FIBC</span>
                )}
              </div>
            </motion.article>
            </AnimatePresence>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                className="highlights__nav highlights__nav--prev"
                onClick={() => paginate(-1)}
                aria-label="Previous highlight"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                className="highlights__nav highlights__nav--next"
                onClick={() => paginate(1)}
                aria-label="Next highlight"
              >
                &rsaquo;
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="highlights__dots" role="tablist" aria-label="Choose a highlight">
            {highlights.map((h, i) => (
              <button
                key={h.id}
                type="button"
                role="tab"
                className={`highlights__dot${i === active ? ' is-active' : ''}`}
                aria-selected={i === active}
                aria-label={h.title}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HighlightsCarousel;
