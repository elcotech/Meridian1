import React, { useEffect } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

/* =========================
   FULLSCREEN HELPER
========================= */
const forceFullscreen = () => {
  const el = document.documentElement;

  if (document.fullscreenElement || document.webkitFullscreenElement) return;

  try {
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  } catch (e) {
    // fail silently
  }
};

function App() {
  /* =========================
     FIRST USER INTERACTION
  ========================= */
  useEffect(() => {
    const handler = () => forceFullscreen();
    document.addEventListener('touchstart', handler, { once: true });
    document.addEventListener('click', handler, { once: true });

    return () => {
      document.removeEventListener('touchstart', handler);
      document.removeEventListener('click', handler);
    };
  }, []);

  const content = {
    brand: 'Bini Seifu Real Estate',
    about: 'About Us',
    services: 'Our Services',
    properties: 'Featured Properties',
    testimonials: 'Client Testimonials',
    contact: 'Contact Us',

    welcome: 'Find Your Dream Home With Confidence',
    description:
      'We connect you with premium residential and commercial properties, backed by expert guidance.',

    aboutText:
      '🏡 Bini Seifu Real Estate helps clients buy, sell, and invest confidently.\n\n' +
      '📍 Residential homes, luxury apartments, land, and commercial properties.\n\n' +
      '🤝 Honest guidance and smooth transactions.',

    servicesList: [
      ['Property Buying & Selling', 'Homes, apartments, land, and commercial properties.'],
      ['Luxury Properties', 'Villas and modern residences.'],
      ['Land & Investments', 'High-return property opportunities.'],
      ['Property Management', 'Tenant sourcing and rent collection.'],
      ['Legal Support', 'Contracts and title verification.'],
      ['Consultation', 'Valuation and smart advice.'],
    ],

    propertiesList: [
      ['Modern Luxury Apartment', '3 Bedrooms • City Center'],
      ['Family Home', '4 Bedrooms • Garden'],
      ['Commercial Space', 'High Visibility • Easy Access'],
    ],

    testimonialsList: [
      'Professional, fast, and trustworthy.',
      'Excellent advice and support.',
      'They handled everything perfectly.',
    ],
  };

  /* =========================
     SEND EMAIL
  ========================= */
  const sendEmail = (e) => {
    e.preventDefault();
    forceFullscreen();

    emailjs
      .sendForm(
        'service_udbhs7q',
        'template_kssz2gr',
        e.target,
        'LkPanZm-3OzubO9Pg'
      )
      .then(() => alert('Message sent successfully!'))
      .catch(() => alert('Failed to send message.'));

    e.target.reset();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">{content.brand}</h2>
          <ul>
            <li><a href="#about" onClick={forceFullscreen}>{content.about}</a></li>
            <li><a href="#services" onClick={forceFullscreen}>{content.services}</a></li>
            <li><a href="#properties" onClick={forceFullscreen}>{content.properties}</a></li>
            <li><a href="#testimonials" onClick={forceFullscreen}>{content.testimonials}</a></li>
            <li><a href="#contact" onClick={forceFullscreen}>{content.contact}</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>{content.welcome}</h1>
            <p>{content.description}</p>
            <a href="#contact" className="cta-button" onClick={forceFullscreen}>
              Contact Us
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <h2>{content.about}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{content.aboutText}</p>
        </section>

        {/* SERVICES */}
        <section className="section-dark" id="services">
          <h2>{content.services}</h2>
          <div className="grid">
            {content.servicesList.map(([title, text], i) => (
              <div className="card" key={i} onClick={forceFullscreen}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="section" id="properties">
          <h2>{content.properties}</h2>
          <div className="grid">
            {content.propertiesList.map(([title, text], i) => (
              <div className="card property" key={i} onClick={forceFullscreen}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-dark" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="grid">
            {content.testimonialsList.map((t, i) => (
              <div className="card testimonial" key={i} onClick={forceFullscreen}>
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Contact & Business Information</h2>
          <p>
            📞 <strong>Phone:</strong> 0911434369 <br />
            📧 <strong>Email:</strong> biniseifu@gmail.com <br />
            🕘 <strong>Hours:</strong> Mon – Sat, 8:30 AM – 6:30 PM
          </p>

          {/* SINGLE TEXTAREA FORM */}
          <form className="contact-form" onSubmit={sendEmail}>
            <textarea
              name="message"
              placeholder="Full name : Phone number and Remark 🚀 ሙሉ ስም ፡ ስልክ እና ማብራርያ"
              required
              rows="6"
              onFocus={forceFullscreen}
            ></textarea>

            <button type="submit" onClick={forceFullscreen}>
              Send Inquiry
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Bini Seifu Real Estate. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
