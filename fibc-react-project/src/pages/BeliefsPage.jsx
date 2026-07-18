import SEO from '../components/shared/SEO';
import PageHero from '../components/shared/PageHero';
import {beliefs} from '../data/beliefs.js';
import {motion} from 'framer-motion';

function BeliefRecursion({belief, number, depth=0}) {
    return (
    <motion.article
      className={`belief belief--depth-${depth}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="belief__num" aria-hidden="true">{number}</span>
      <div className="belief__content">
        <h2 className="belief__title">{belief.title}</h2>
        
        {belief.summary.map((paragraph, index) => (
          <p key={index} className="belief__summary">{paragraph}</p>
        ))}
                
        {belief.children.length > 0 && (
          <div className="belief__children">
            {belief.children.map((child, index) => (
              <BeliefRecursion
                key={child.id}
                belief={child}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </motion.article>
    );
}

function BeliefsPage() {
    return(
        <>
            <SEO
                title="What We Believe"
                description="The doctrinal statement of Faith Independent Baptist Church — our core convictions about Scripture, God, salvation, and the church."
            />

            <PageHero
                eyebrow="Doctrine"
                title="What We Believe"
                subtitle="A summary of our core convictions, drawn directly from Scripture."
            />

            <section className="section">
                <div className="container-narrow">
                    <div className="beliefs-list">
                        {beliefs.map((belief, index) => (
                        <BeliefRecursion
                            key={belief.id}
                            belief={belief}
                            number={String(index + 1).padStart(2, '0')}
                            depth={0}
                        />
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .beliefs-list { display: flex; flex-direction: column; gap: 3rem; }
                .belief {
                display: grid;
                grid-template-columns: 80px 1fr;
                gap: 1.5rem;
                padding-bottom: 3rem;
                border-bottom: 1px solid var(--color-line);
                }
                .belief:last-child { border-bottom: none; }
                .belief__num {
                font-family: var(--font-display);
                font-size: 3rem;
                font-weight: 700;
                color: var(--accent);
                line-height: 1;
                opacity: 0.7;
                }
                .belief__title { font-size: 1.75rem; margin-bottom: 0.75rem; color: var(--brand); }
                .belief__summary { font-size: 1.0625rem; line-height: 1.75; margin-bottom: 1rem; }
                .belief__refs {
                font-family: var(--font-body);
                font-size: 0.875rem;
                color: var(--text-muted);
                font-style: italic;
                }
                @media (max-width: 575px) {
                .belief { grid-template-columns: 1fr; }
                .belief__num { font-size: 2rem; }
                }
            `}</style>
                </>
    );
}

export default BeliefsPage;