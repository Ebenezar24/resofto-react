import { useState } from 'react'

// Replace YOUR_FORM_ID with your real Formspree form ID.
// Sign up free at https://formspree.io, create a form pointed at your Gmail inbox,
// then paste the ID they give you (e.g. "xzbqwxyz") in place of YOUR_FORM_ID below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdvnnll'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Contact Us</span>
          <h2>Let's talk about your infrastructure</h2>
          <p>Fill out the form and our team will get back to you within one business day.</p>
        </div>
        <div className="contact-grid">
          <div>
            <div className="card" style={{ marginBottom: 22 }}>
              <div className="icon">✉</div>
              <h3>Email Us</h3>
              <p><a href="mailto:info@resoftotechnologies.com" style={{ color: 'var(--accent-teal)' }}>info@resoftotechnologies.com</a></p>
            </div>
            <div className="card" style={{ marginBottom: 22 }}>
              <div className="icon">☎</div>
              <h3>Call Us</h3>
              <p>Head Office: <a href="tel:+919606840076" style={{ color: 'var(--accent-teal)' }}>+91 9606840076</a></p>
            </div>
            <div className="card">
              <div className="icon">💬</div>
              <h3>Chat on WhatsApp</h3>
              <p>Message us directly for a quick response.</p>
              <a
                className="btn-secondary"
                style={{ display: 'inline-block', marginTop: 14 }}
                href="https://wa.me/919606840076?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="contact-form">
            {status === 'success' ? (
              <div className="form-success">
                ✓ Thanks! Your message has been sent. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="you@company.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Tell us what you're looking for..." value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="form-note" style={{ color: '#ff6b6b' }}>Something went wrong. Please try again or email us directly.</p>
                )}
                <p className="form-note">Submissions are delivered straight to our inbox via Formspree.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
