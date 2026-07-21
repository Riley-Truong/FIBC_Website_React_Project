import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/shared/SEO.jsx';
import PageHero from '../components/shared/PageHero.jsx';
import ChurchMap from '../components/shared/ChurchMap.jsx';
import '../styles/ContactPage.css';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('sending');
    // Simulated submit — wire up Netlify Forms, Formspree, or your own backend later.
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 600);
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Faith Independent Baptist Church of McDonough, GA. We'd love to hear from you."
      />

      <PageHero
        title="Contact Us"
        subtitle="Question, prayer request, or just want to say hello. We'd love to hear from you!"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-h2">Send a message</h2>
              <p className="contact-lead">
                Fill out the form and someone from our team will follow up within a couple of days.
              </p>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <label className="contact-field">
                  <span>Your name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    required
                    autoComplete="name"
                  />
                </label>

                <label className="contact-field">
                  <span>Email address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    required
                    autoComplete="email"
                  />
                </label>

                <label className="contact-field">
                  <span>Message</span>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="btn-fibc"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>

                <AnimatePresence>
                  {status === 'sent' && (
                    <motion.div
                      className="contact-confirm"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Thanks — we got it. Someone will be in touch soon.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Details */}
            <aside className="contact-details">
              <div className="contact-block">
                <h3>Visit us</h3>
                <address>
                  Faith Independent Baptist Church
                  <br />
                  McDonough, GA
                </address>
                <p className="contact-note">
                  Driving directions and a map are on the{' '}
                  <a href="/visit">Visit page</a>.
                </p>
              </div>

              <div className="contact-block">
                <h3>Worship with us</h3>
                <p>
                  Sundays<br />
                  9:30 AM Sunday School<br />
                  11:00 AM Morning Worship<br />
                  5:00 PM Evening Service
                </p>
                <p>
                  Wednesdays<br />
                  7:00 PM Bible Study
                </p>
              </div>
            </aside>
          </div>

          <div className="contact-map">
            <h2 className="contact-h2">Find us</h2>
            <ChurchMap query="Faith Independent Baptist Church, McDonough, GA" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
