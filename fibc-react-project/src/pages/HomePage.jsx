import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import fibcLogo from '../assets/fibc-logo-white-rust-383w.png'
import SEO from '../components/shared/SEO';
import SectionHeading from '../components/shared/SectionHeading';
import { services } from '../data/services';
import { ministries } from '../data/ministries';
import '../styles/HomePage.css';

function HomePage() {
    return(
      <>
        <SEO
          title="Home"
          description="Faith Independent Baptist Church is a Bible-believing church in McDonough, Georgia. Visitors welcome!"
        />

        <section className="home-hero">
          <div className="container-base home-hero__inner">
            <motion.div className="home-hero__content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <span className="eyebrow">Faith Independent Baptist Church</span>
              <h1 className="home-hero__title">
                Where Scripture is preached <em>and</em> people are known.
              </h1>
              <p className="home-hero__subtitle lead">
                A Bible-believing, family-centered church in the heart of McDonough, Georgia.
                Whether you’ve been in church your whole life or you’re still figuring out
                what you believe, there’s a seat saved for you on Sunday.
              </p>
              <div className="home-hero__ctas">
                <Link to="/visit" className="btn-fibc">Plan your visit</Link>
                <Link to="/services" className="btn-fibc-outline">Service times</Link>
              </div>
            </motion.div>
            <motion.aside className="home-hero__card" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} aria-label="This Sunday at FIBC"
            >
              <span className="eyebrow">This Sunday</span>
              <h2 className="home-hero__card-title">Join us at 11 AM</h2>
              <ul className="home-hero__card-list">
                <li><strong>10:00 AM</strong> Sunday School</li>
                <li><strong>11:00 AM</strong> Morning Worship</li>
                <li><strong>5:00 PM</strong>  Evening Service</li>
              </ul>
              <p className="home-hero__card-meta">
                1099 Hwy 81 West, McDonough, GA 30253<br />
                First-time? <Link to="/visit">Read what to expect</Link>.
              </p>
            </motion.aside>
          </div>
        </section>

        <section className="section">
          <div className="container-narrow text-center">
            <SectionHeading
              eyebrow="Welcome"
              title="A church for ordinary people who want to know God."
              subtitle="We exist to glorify God by making disciples. Leading people from where they are to deeper, lasting faith in Jesus Christ. That happens through the faithful preaching of God’s Word, sincere worship, genuine relationships, and meaningful service."
              align="center"
            />
            <Link to="/about" className="btn-fibc-outline">Learn more about us</Link>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container-base">
            <SectionHeading eyebrow="Gather" title="When we meet" align="center" />
            <div className="home-services">
              {services.map(day => (
                <article className="home-services__day" key={day.day}>
                  <h3 className='home-services__day-title'>{day.day}</h3>
                  <ul className="home-services__sessions">
                    {day.sessions.map(s => (
                      <li key={s.name} className="home-services__session">
                        <span className="home-services__time">{s.time}</span>
                        <span className="home-services__name">{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-base">
            <div className="home-beliefs">
              <div>
                <SectionHeading eyebrow="Doctrine" title="What We Believe" subtitle = "We believe the Holy Scriptures of the Old and New Testaments to be the verbally (every word) and plenarily (completely) inspired Word of God. The Scriptures are inerrant, infallible and God-breathed, and therefore are the final authority for faith and life. The sixty-six books of the Old and New Testaments are the complete and divine revelation of God to man (II Timothy 3:16-17; II Peter 1:20-21). [Note: For reasons of textual reliability, we promote and use the King James Version of the Bible in our English-speaking services.]"/>
                <Link to="/beliefs" className="btn-fibc-outline">Read our full doctrinal statement</Link>
              </div>
              <blockquote className='scripture'>
                All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness
                <cite>II Timothy 3:16</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container-base">
            <SectionHeading eyebrow="Ministries" title="There’s a place for everyone" subtitle="Whatever stage of life you’re in, we have a ministry that fits." align="center"/>
            <motion.div className="home-ministries" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {ministries.filter(m => m.featured).map(m => (
                <motion.div key={m.id} className="fibc-card fibc-card--hover home-ministries__card"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16,1,0.3,1] } },
                  }}
                >
                  <h3 className="home-ministries__card-title">{m.name}</h3>
                  <p className="home-ministries__card-desc">{m.description}</p>
                  <p className="home-ministries__card-meets"><strong>Meets:</strong> {m.meets}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center" style={{marginTop: 'var(--sp-7)'}}>
              <Link to="/ministries" className="btn-fibc-outline">See all ministries</Link>
            </div>
          </div>
        </section>

        <section className="section--inverse home-cta">
          <div className="container-narrow text-center">
            <span className="eyebrow eyebrow--inverse">Take a step</span>
            <h2 className="home-cta__title">Whatever you’re looking for, start here.</h2>
            <p className="home-cta__sub">
              Plan your first visit, watch a recent sermon, or send us a question.
            </p>
            <div className="home-cta__buttons">
              <Link to="/visit" className="btn-fibc-ghost">Plan your visit</Link>
              <Link to="/sermons" className="btn-fibc-ghost">Watch a sermon</Link>
              <Link to="/contact" className="btn-fibc-ghost">Contact us</Link>
            </div>
          </div>
        </section>

      </>      
    );
}

export default HomePage;