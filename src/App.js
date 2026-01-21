import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const content = {
    name: 'MERIDIAN LAW FIRM LLP',
    title: 'ብቁ የሆነ የሕግ አገልግሎት',
    location: 'Addis Ababa, Ethiopia',
    phone: '+251-900-802400 / +251-911-425414',
    email: 'meridianlawinfo@gmail.com',
    website: 'https://meridianlawfirmllp.com.et',
    
    welcome: 'Strategically positioned within international legal and professional networks',
    description: 'A Full-Service Ethiopian Law Firm providing comprehensive legal services across all areas of Ethiopian law for domestic and international clients.',
    
    about: 'About Our Firm',
    aboutText: `🏛️ MERIDIAN LAW FIRM LLP - ሜሪዲያን የጥብቅና አገልግሎት ኃ/የተ/የሽ/ማህበር

A Full-Service Ethiopian Law Firm
Strategically positioned within international legal and professional networks, we provide comprehensive legal services across all areas of Ethiopian law for domestic and international clients, including foreign investors.

ማንኛውንም የሕግ አገልግሎት እንሰጣለን
ለአገር ውስጥና ለዓለም አቀፍ ደንበኞች፣ የውጭ ባለሃብቶችን ጨምሮ፣ በኢትዮጵያ ሕግ በሁሉም መስኮች ላይ የተለያዩ የሕግ አገልግሎቶችን በተለያዩ ዘመኑ ባፈራቸው በርካታ አማራጮች እንሰጣለን።

Through strategic legal advocacy and informed consultation, we position our clients at the forefront of their fields.
የተለያዩ የክርክር አማራጮችን በመጠቀም እንዲሁም የሕግ ምክር ቀድመን በመስጠት ደንበኞቻችን ቀዳሚ እንዲሆኑ እንተጋለን።`,

    services: 'Our Legal Services',
    servicesList: [
      ['Legal Advisory Services', 'Expert legal guidance to help your business navigate complex matters and make informed decisions.'],
      ['Commercial Law', 'Guiding businesses from start-up to multinational, including entity formation, M&A, corporate governance, and all commercial matters.'],
      ['Litigation & Defense', 'Handling complex civil and criminal litigation with the rigor required for federal-level disputes.'],
      ['Tax Law & Financial Strategy', 'Conducting high-level reviews of tax obligations, advising on incentives, and representing clients before tax authorities.'],
      ['Insurance & Liability Advisory', 'Providing counsel on liability, coverage disputes, regulatory compliance, and risk management in all areas of law.'],
      ['Comprehensive Legal Services', 'Expert representation in civil, criminal, labour, commercial, and all areas of Ethiopian law for domestic and international clients.']
    ],

    partners: 'Our Partners',
    partnersList: [
      ['MESFIN MARE WELDEGIORGIS', 'MANAGING PARTNER', '30+ years of extensive experience in constitutional law, international law, criminal law, civil law, commercial law, and administrative law.'],
      ['HABTAMU BISRAT KEBEDE', 'DEPUTY MANAGING PARTNER', '20+ years of experience in governmental and public institutions as well as in private legal practice.'],
      ['TALEMA GIZACHEW BIZUNEH', 'PARTNER', '22+ years of combined service in governmental institutions and as a practicing lawyer.'],
      ['AKLILU ABEBAW BELAY', 'PARTNER', '22+ years of extensive service in various governmental institutions, public corporations, and private legal practice.']
    ],

    expertise: 'Specialized Service Sectors',
    expertiseList: [
      'Judicial Insight & Oversight – Applying impartial legal analysis to every case',
      'Strategic Networks & Policy – Bridging the gap between legislation and commercial objectives',
      'Litigation & Defense – Federal-level civil and criminal litigation',
      'Commercial Law – Entity formation, M&A, corporate governance',
      'Tax Law & Financial Strategy – Tax obligations and incentives',
      'Insurance & Liability Advisory – Risk management and compliance',
      'Foreign Investment – Investment, immigration, and cross-border legal matters'
    ],

    newsletter: 'Join Our Newsletter',
    newsletterText: 'Receive updates, legal insights, and firm news directly in your inbox.'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      _subject: `New Legal Inquiry from ${formData.get('name')}`,
      _captcha: "false"
    };

    try {
      // Use FormSubmit.co with professional email
      const response = await fetch('https://formsubmit.co/ajax/meridianlawinfo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage('✅ Thank you! Your legal inquiry has been sent successfully. We will respond within 24 hours.');
        e.target.reset();
      } else {
        setSubmitMessage('⚠️ There was an error sending your message. Please try again or email directly at meridianlawinfo@gmail.com');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('❌ Network error. Please try again or contact directly via phone.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">MERIDIAN LAW FIRM LLP</h2>
          <ul>
            <li><a href="#about">About Firm</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-title">
              <h1>{content.name}</h1>
              <div className="title-gradient">{content.title}</div>
            </div>
            <p className="hero-subtitle">{content.welcome}</p>
            <p className="hero-description">{content.description}</p>
            
            <div className="contact-info-header">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{content.location}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${content.phone}`} className="contact-link">{content.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href={`mailto:${content.email}`} className="contact-link">{content.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <a href={content.website} target="_blank" rel="noopener noreferrer" className="contact-link">Visit Website</a>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href="#services" className="cta-button primary">Our Services</a>
              <a href="#contact" className="cta-button secondary">Contact Us</a>
            </div>
          </div>
        </section>

        {/* ABOUT FIRM */}
        <section className="section" id="about">
          <h2><span className="section-icon">🏛️</span> {content.about}</h2>
          <div className="profile-card">
            <div className="profile-content">
              <p style={{ whiteSpace: 'pre-line' }}>{content.aboutText}</p>
              <div className="experience-badge">
                <span className="experience-number">30+</span>
                <span className="experience-text">Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-dark" id="services">
          <h2><span className="section-icon">⚖️</span> {content.services}</h2>
          <div className="grid">
            {content.servicesList.map(([title, text], i) => (
              <div className="card service-card" key={i}>
                <div className="card-icon">{['📋', '💼', '⚔️', '💰', '🛡️', '🌍'][i]}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="section" id="partners">
          <h2><span className="section-icon">👥</span> Our Legal Partners</h2>
          <div className="grid">
            {content.partnersList.map(([name, title, description], i) => (
              <div className="card partner-card" key={i}>
                <div className="card-icon">{['👨‍⚖️', '👨‍💼', '👨‍🎓', '👨‍⚖️'][i]}</div>
                <h3>{name}</h3>
                <div className="partner-title">{title}</div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="section-dark" id="expertise">
          <h2><span className="section-icon">🎯</span> {content.expertise}</h2>
          <div className="expertise-list">
            {content.expertiseList.map((item, i) => (
              <div className="expertise-item" key={i}>
                <span className="expertise-icon">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="section newsletter-section">
          <h2><span className="section-icon">📬</span> {content.newsletter}</h2>
          <div className="newsletter-content">
            <p>{content.newsletterText}</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
            <div className="newsletter-option">
              <input type="checkbox" id="no-thanks" />
              <label htmlFor="no-thanks">No, thank you</label>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section" id="contact">
          <h2><span className="section-icon">📞</span> Contact Us</h2>
          
          {submitMessage && (
            <div className={`alert-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get Legal Consultation</h3>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>{content.location}</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href={`tel:${content.phone}`} className="contact-link">{content.phone}</a></p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href={`mailto:${content.email}`} className="contact-link">{content.email}</a></p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">🌐</span>
                  <div>
                    <strong>Website</strong>
                    <p><a href={content.website} target="_blank" rel="noopener noreferrer" className="contact-link">{content.website}</a></p>
                  </div>
                </div>
              </div>
              
              <div className="availability">
                <h4>🕒 Office Hours</h4>
                <p>• Monday - Friday: 8:30 AM - 5:30 PM</p>
                <p>• Saturday: 9:00 AM - 1:00 PM</p>
                <p>• Emergency consultations available</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name"
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address"
                  required 
                />
                <select name="service" required>
                  <option value="">Select Legal Service Needed</option>
                  <option value="advisory">Legal Advisory Services</option>
                  <option value="commercial">Commercial Law</option>
                  <option value="litigation">Litigation & Defense</option>
                  <option value="tax">Tax Law & Financial Strategy</option>
                  <option value="insurance">Insurance & Liability</option>
                  <option value="foreign">Foreign Investment</option>
                  <option value="other">Other Legal Matter</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Describe your legal matter or inquiry..."
                  required
                  rows="6"
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Legal Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} MERIDIAN LAW FIRM LLP</p>
          <p className="footer-tagline">ማንኛውንም የሕግ አገልግሎት እንሰጣለን</p>
          <div className="footer-links">
            <a href={`mailto:${content.email}`}>Email</a>
            <a href={`tel:${content.phone}`}>Phone</a>
            <a href={content.website} target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;