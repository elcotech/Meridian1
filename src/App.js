import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const content = {
    brand: 'Bini Seifu Real Estate',
    tagline: 'Luxury Homes • Smart Investments • Trusted Advisors',

    about: 'About Us',
    services: 'Our Services',
    properties: 'Featured Properties',
    testimonials: 'Client Testimonials',
    contact: 'Contact Us',

    welcome: 'Find Your Dream Home With Confidence',
    description:
      'We connect you with premium residential and commercial properties, backed by expert guidance and market insight.',

    aboutText:
      '🏡 Bini Seifu Real Estate is a professional real estate firm dedicated to helping clients buy, sell, and invest in properties with confidence.\n\n' +
      '📍 We specialize in residential homes, luxury apartments, land sales, and commercial properties. Our team understands the local market deeply and provides transparent, honest advice.\n\n' +
      '🤝 From first-time buyers to seasoned investors, we deliver personalized service, legal guidance, and smooth transactions — every step of the way.',

    service1: 'Property Buying & Selling',
    service1Text:
      'We help you buy and sell homes, apartments, land, and commercial properties at the best market value.',

    service2: 'Luxury & Residential Properties',
    service2Text:
      'Exclusive listings of villas, apartments, and gated community homes designed for modern living.',

    service3: 'Land & Investment Opportunities',
    service3Text:
      'Strategic land acquisition and high-return property investments with full documentation support.',

    service4: 'Property Management',
    service4Text:
      'Complete property management services including tenant sourcing, rent collection, and maintenance.',

    service5: 'Legal & Documentation Support',
    service5Text:
      'We assist with contracts, title verification, and legal compliance to ensure secure transactions.',

    service6: 'Consultation & Valuation',
    service6Text:
      'Professional property valuation and personalized consultation to guide smart real estate decisions.',

    property1: 'Modern Luxury Apartment',
    property1Text: '3 Bedrooms • City Center • Secure Parking • Balcony View',

    property2: 'Spacious Family Home',
    property2Text: '4 Bedrooms • Garden • Quiet Neighborhood • Prime Location',

    property3: 'Commercial Office Space',
    property3Text: 'Ideal for Businesses • High Visibility • Easy Access',

    testimonial1:
      'Bini Seifu Real Estate helped me find my dream home quickly and professionally. The process was smooth and stress-free.',
    testimonial2:
      'Excellent service and honest advice. I successfully invested in land with full legal support.',
    testimonial3:
      'Very professional team. They managed my rental property perfectly and handled everything.',

    contactForm: 'Request Property Consultation',
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_udbhs7q',
      'template_kssz2gr',
      e.target,
      'LkPanZm-3OzubO9Pg'
    )
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">{content.brand}</h2>
          <ul>
            <li><a href="#about">{content.about}</a></li>
            <li><a href="#services">{content.services}</a></li>
            <li><a href="#properties">{content.properties}</a></li>
            <li><a href="#testimonials">{content.testimonials}</a></li>
            <li><a href="#contact">{content.contact}</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>{content.welcome}</h1>
            <p>{content.description}</p>
            <a href="#contact" className="cta-button">
              {content.contactForm}
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
            <div className="card">
              <h3>{content.service1}</h3>
              <p>{content.service1Text}</p>
            </div>
            <div className="card">
              <h3>{content.service2}</h3>
              <p>{content.service2Text}</p>
            </div>
            <div className="card">
              <h3>{content.service3}</h3>
              <p>{content.service3Text}</p>
            </div>
            <div className="card">
              <h3>{content.service4}</h3>
              <p>{content.service4Text}</p>
            </div>
            <div className="card">
              <h3>{content.service5}</h3>
              <p>{content.service5Text}</p>
            </div>
            <div className="card">
              <h3>{content.service6}</h3>
              <p>{content.service6Text}</p>
            </div>
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="section" id="properties">
          <h2>{content.properties}</h2>
          <div className="grid">
            <div className="card property">
              <h3>{content.property1}</h3>
              <p>{content.property1Text}</p>
            </div>
            <div className="card property">
              <h3>{content.property2}</h3>
              <p>{content.property2Text}</p>
            </div>
            <div className="card property">
              <h3>{content.property3}</h3>
              <p>{content.property3Text}</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-dark" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="grid">
            <div className="card testimonial">{content.testimonial1}</div>
            <div className="card testimonial">{content.testimonial2}</div>
            <div className="card testimonial">{content.testimonial3}</div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Contact & Business Information</h2>
          <p>
            📞 <strong>Phone:</strong> 0911434369 <br />
            📧 <strong>Email:</strong> biniseifu@gmail.com <br />
            🕘 <strong>Business Hours:</strong> Mon – Sat, 8:30 AM – 6:30 PM
          </p>

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Full Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Tell us what type of property you are looking for..."
              required
            />
            <button type="submit">Send Inquiry</button>
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
