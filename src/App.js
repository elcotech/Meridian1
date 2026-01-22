import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('am'); // 'am' for Amharic, 'en' for English
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading completion
    setTimeout(() => setIsLoading(false), 1000);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content in both languages
  const content = {
    am: {
      name: 'መሪዲያን የሕግ ቢሮ ኤል.ኤል.ፒ.',
      title: 'ብቁ የሆነ የሕግ አገልግሎት',
      location: 'አዲስ አበባ, ኢትዮጵያ',
      phone: '+251-900-802400 / +251-911-425414',
      email: 'meridianlawinfo@gmail.com',
      website: 'https://meridianlawfirmllp.com.et',
      welcome: 'በዓለም አቀፍ የሕግ አውታረ መረቦች ውስጥ በስትራቴጂያዊ ሁኔታ ተቀምጠናል',
      description: 'ሙሉ አገልግሎት የሚሰጥ የኢትዮጵያ የሕግ ቢሮ ለውስጥ እና ለዓለም አቀፍ ደንበኞች በኢትዮጵያ ሕግ ሁሉም መስኮች ላይ የሚያሟሉ የሕግ አገልግሎቶችን የሚስጥ።',
      about: 'ስለ ቢሮችን',
      aboutText: `🏛️ መሪዲያን የሕግ ቢሮ ኤል.ኤል.ፒ. - ሜሪዲያን የጥብቅና አገልግሎት ኃ/የተ/የሽ/ማህበር

ሙሉ አገልግሎት የሚሰጥ የኢትዮጵያ የሕግ ቢሮ
በዓለም አቀፍ የሕግ እና የሙያ አውታረ መረቦች ውስጥ በስትራቴጂያዊ ሁኔታ ተቀምጠን ለአገር ውስጥ እና ለዓለም አቀፍ ደንበኞች፣ የውጭ ባለሃብቶችን ጨምሮ፣ በኢትዮጵያ ሕግ ሁሉም መስኮች ላይ የሚያሟሉ የሕግ አገልግሎቶችን እናቀርባለን።

ማንኛውንም የሕግ አገልግሎት እንሰጣለን
ለአገር ውስጥና ለዓለም አቀፍ ደንበኞች፣ የውጭ ባለሃብቶችን ጨምሮ፣ በኢትዮጵያ ሕግ በሁሉም መስኮች ላይ የተለያዩ የሕግ አገልግሎቶችን በተለያዩ ዘመኑ ባፈራቸው በርካታ አማራጮች እንሰጣለን።

በስትራቴጂያዊ የሕግ ጠበቅነት እና በትክክለኛ ምክር የደንበኞቻችንን መስኮች በፊት እናስቀምጣለን።
የተለያዩ የክርክር አማራጮችን በመጠቀም እንዲሁም የሕግ ምክር ቀድመን በመስጠት ደንበኞቻችን ቀዳሚ እንዲሆኑ እንተጋለን።`,
      services: 'የሕግ አገልግሎቶቻችን',
      servicesList: [
        ['የሕግ ምክር አገልግሎቶች', 'የባለሙያ የሕግ መመሪያ ዕቅዶችዎ ውስብስብ ጉዳዮችን እንዲያስተናግዱ እና ትክክለኛ ውሳኔዎችን እንዲወስኑ ለመርዳት።'],
        ['ንግድ ሕግ', 'ንግድ ድርጅቶችን ከመጀመሪያ እስከ ባለብዙ ብሔራዊ ደረጃ ማስተዋወቅ፣ የድርጅት መፍጠር፣ M&A፣ የድርጅት አስተዳደር እና ሁሉም የንግድ ጉዳዮች።'],
        ['ፍርድ እና መከላከል', 'በፌደራር ደረጃ የሚነሱ ክርክሮችን የሚጠይቁ ውስብስብ የሲቪል እና የወንጀል ፍርዶችን መከላከል።'],
        ['ግብር ሕግ እና የፋይናንስ ስትራቴጂ', 'የግብር ግዴታዎችን በከፍተኛ ደረጃ መግለጫ፣ በማበረታቻዎች ምክር ማቅረብ እና ደንበኞችን በግብር ባለስልጣኖች ፊት መወከል።'],
        ['የኢንሹራንስ እና ተጠያቂነት ምክር', 'በሁሉም የሕግ መስኮች ውስጥ ተጠያቂነት፣ የሽፋን ክርክር፣ የደንብ ማሟላት እና አደጋ አስተዳደር ላይ ምክር ማቅረብ።'],
        ['ሙሉ የሕግ አገልግሎቶች', 'በሲቪል፣ ወንጀል፣ የጉልበት፣ ንግድ እና በኢትዮጵያ ሕግ ሁሉም መስኮች ለአገር ውስጥ እና ለዓለም አቀፍ ደንበኞች የባለሙያ ወክል።']
      ],
      partners: 'አጋሮቻችን',
      partnersList: [
        ['መስፍን ማሬ ወልደጊዮርጊስ', 'ማኔጂንግ አጋር', '30+ ዓመታት በሕገ መንግሥት ሕግ፣ ዓለም አቀፍ ሕግ፣ ወንጀል ሕግ፣ ሲቪል ሕግ፣ ንግድ ሕግ እና አስተዳደራዊ ሕግ ውስጥ የሰፈረ ልምድ።'],
        ['ሀብታሙ ብስራት ከበደ', 'የማኔጂንግ አጋር ምክትል', '20+ ዓመታት በመንግሥት እና በህዝብ ተቋማት እንዲሁም በግል የሕግ ልምምድ ውስጥ ያለው ልምድ።'],
        ['ታለማ ግዛቸው ብዙነህ', 'አጋር', '25+ ዓመታት በመንግሥት ተቋማት እና እንደ ተግባራዊ የሕግ ባለሙያ ያለው የተዋሃደ አገልግሎት።'],
        ['አክሊሉ አበባው በላይ', 'አጋር', '25+ ዓመታት በተለያዩ የመንግሥት ተቋማት፣ የህዝብ ኮርፖሬሽኖች እና በግል የሕግ ልምምድ ውስጥ ያለው ሰፊ አገልግሎት።']
      ],
      expertise: 'ልዩ የአገልግሎት ዘርፎች',
      expertiseList: [
        'የፍርድ ቤት ግንዛቤ እና ቁጥጥር - በእያንዳንዱ ጉዳይ ላይ የማያጣራ የሕግ ትንተና መተግበር',
        'የስትራቴጂ አውታረመረቦች እና ፖሊሲ - በሕግ እና በንግድ ዓላማዎች መካከል ያለውን ክፍተት መሙላት',
        'ፍርድ እና መከላከል - የፌደራር ደረጃ ሲቪል እና ወንጀል ፍርዶች',
        'ንግድ ሕግ - የድርጅት መፍጠር፣ M&A፣ የድርጅት አስተዳደር',
        'ግብር ሕግ እና የፋይናንስ ስትራቴጂ - የግብር ግዴታዎች እና ማበረታቻዎች',
        'የኢንሹራንስ እና ተጠያቂነት ምክር - አደጋ አስተዳደር እና የደንብ ማሟላት',
        'የውጭ ኢንቨስትመንት - ኢንቨስትመንት፣ ኢሚግሬሽን እና በድንበር በሚያልፉ የሕግ ጉዳዮች'
      ],
      articles: 'ጽሑፎች እና ሕግ',
      articlesList: [
        ['የኢትዮጵያ ንግድ ሕግ እድገቶች', 'የ2024 አዲስ አመት ንግድ ሕግ ማሻሻያዎች ላይ የተደረገ ትንታኔ።'],
        ['የውጭ ኢንቨስትመንት ማዕቀብ', 'በኢትዮጵያ ውስጥ የሚደረጉ የውጭ ኢንቨስትመንቶችን ለመምራት የሚያግዝ የሕግ መመሪያ።'],
        ['የንግድ ውል አዋጅ', 'በኢትዮጵያ ውስጥ ንግድ ውሎችን በሚመለከት የሚታወቁ ጉዳዮች።']
      ],
      newsletter: 'የእኛን ዜና ደብተር ይቀላቀሉ',
      newsletterText: 'ዝመናዎች፣ የሕግ ግንዛቤዎች እና የቢሮ ዜናዎችን በቀጥታ በመልዕክት ሳጥንዎ ውስጥ ይቀበሉ።'
    },
    en: {
      name: 'MERIDIAN LAW FIRM LLP',
      title: 'Qualified Legal Services',
      location: 'Addis Ababa, Ethiopia',
      phone: '+251-900-802400 / +251-911-425414',
      email: 'meridianlawinfo@gmail.com',
      website: 'https://meridianlawfirmllp.com.et',
      welcome: 'Strategically positioned within international legal and professional networks',
      description: 'A Full-Service Ethiopian Law Firm providing comprehensive legal services across all areas of Ethiopian law for domestic and international clients.',
      about: 'About Our Firm',
      aboutText: `🏛️ MERIDIAN LAW FIRM LLP - MERIDIAN Premium Service P/L/Cooperative Association

A Full-Service Ethiopian Law Firm
Strategically positioned within international legal and professional networks, we provide comprehensive legal services across all areas of Ethiopian law for domestic and international clients, including foreign investors.

We provide any legal service
For domestic and international clients, including foreign investors, we provide various legal services in all areas of Ethiopian law through the numerous options that time has offered.

Through strategic legal advocacy and informed consultation, we position our clients at the forefront of their fields.
Using various argument options and providing legal advice in advance, we strive to make our clients pioneers.`,
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
        ['TALEMA GIZACHEW BIZUNEH', 'PARTNER', '25+ years of combined service in governmental institutions and as a practicing lawyer.'],
        ['AKLILU ABEBAW BELAY', 'PARTNER', '25+ years of extensive service in various governmental institutions, public corporations, and private legal practice.']
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
      articles: 'Articles & Law',
      articlesList: [
        ['Ethiopian Business Law Developments', 'Analysis on the new year 2024 business law amendments.'],
        ['Foreign Investment Framework', 'Legal guide to help navigate foreign investments in Ethiopia.'],
        ['Commercial Contract Essentials', 'Key considerations for business contracts in Ethiopia.']
      ],
      newsletter: 'Join Our Newsletter',
      newsletterText: 'Receive updates, legal insights, and firm news directly in your inbox.'
    }
  };

  const currentContent = content[language];

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
        setSubmitMessage(language === 'am' ? 
          '✅ አመሰግናለሁ! የሕግ ጥያቄዎ በተሳካ ሁኔታ ተልኳል። በ24 ሰዓታት ውስጥ እንመለሳለን።' : 
          '✅ Thank you! Your legal inquiry has been sent successfully. We will respond within 24 hours.');
        e.target.reset();
      } else {
        setSubmitMessage(language === 'am' ?
          '⚠️ መልእክት በመላክ ላይ ስህተት አጋጥሞዎታል። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ ወደ meridianlawinfo@gmail.com ይፅፉ።' :
          '⚠️ There was an error sending your message. Please try again or email directly at meridianlawinfo@gmail.com');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(language === 'am' ?
        '❌ የኔትዎርክ ስህተት። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ በስልክ ያግኙን።' :
        '❌ Network error. Please try again or contact directly via phone.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === 'am' ? 'en' : 'am');
    document.documentElement.dir = language === 'am' ? 'ltr' : 'rtl';
  };

  const handleReadMore = (title) => {
    console.log(`Reading more about: ${title}`);
    alert(language === 'am' 
      ? `ስለ "${title}" የበለጠ መረጃ በቅርብ ጊዜ ይገኛል።` 
      : `More information about "${title}" will be available soon.`);
  };

  const handleViewAllArticles = () => {
    console.log('View all articles clicked');
    alert(language === 'am' 
      ? 'ሁሉንም ጽሑፎች በቅርብ ጊዜ ይገኛሉ።' 
      : 'All articles will be available soon.');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
      alert(language === 'am' 
        ? `ለደንበኝነት ${email} አመሰግናለሁ! በቅርብ ጊዜ እንጽፋለን።` 
        : `Thank you ${email} for subscribing! We'll be in touch soon.`);
      form.reset();
    }
  };

  return (
    <div className={`App ${language}`}>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
      
      {/* Page Transition Overlay */}
      {isLoading && <div className="page-transition"></div>}
      
      {/* Skip to Main Content for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        {language === 'am' ? 'ወደ ዋና ይዘት ይሂዱ' : 'Skip to main content'}
      </a>

      {/* Floating Language Toggle */}
      <div className="language-toggle" onClick={handleLanguageToggle} role="button" tabIndex={0} aria-label="Toggle language">
        <div className="toggle-circle" data-lang={language === 'am' ? 'አማ' : 'ENG'}>
          {language === 'am' ? 'ENG' : 'አማ'}
        </div>
      </div>

      {/* Floating Contact Button */}
      <a href="#contact" className="floating-contact gold-shimmer">
        <span className="contact-icon">📞</span>
        <span className="contact-text">{language === 'am' ? 'አግኙን' : 'Contact'}</span>
      </a>

      <header className={scrollPosition > 100 ? 'scrolled' : ''}>
        <nav>
          <div className="nav-container">
            <h2 className="logo">{currentContent.name}</h2>
            
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>{language === 'am' ? 'ስለ ቢሮ' : 'About'}</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>{language === 'am' ? 'አገልግሎቶች' : 'Services'}</a></li>
              <li><a href="#partners" onClick={() => setMenuOpen(false)}>{language === 'am' ? 'አጋሮች' : 'Partners'}</a></li>
              <li><a href="#articles" onClick={() => setMenuOpen(false)}>{language === 'am' ? 'ጽሑፎች' : 'Articles'}</a></li>
              <li><a href="#expertise" onClick={() => setMenuOpen(false)}>{language === 'am' ? 'ልዩነት' : 'Expertise'}</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="nav-cta">{language === 'am' ? 'አግኙን' : 'Contact'}</a></li>
            </ul>
          </div>
        </nav>
      </header>
      
      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
          
          <div className="hero-content">
            <div className="hero-title">
              <h1 data-text={currentContent.name} className="typewriter-text">{currentContent.name}</h1>
              <div className="title-gradient">
                <span className="gradient-text">{currentContent.title}</span>
                <div className="title-underline gold-shimmer"></div>
              </div>
            </div>
            
            <div className="hero-tagline">
              <div className="tagline-item">
                <div className="tagline-icon floating-icon">⚖️</div>
                <p>{currentContent.welcome}</p>
              </div>
            </div>
            
            <p className="hero-description">{currentContent.description}</p>
            
            <div className="contact-info-header">
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">📍</span>
                  </div>
                  <span>{currentContent.location}</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">📞</span>
                  </div>
                  <a href={`tel:${currentContent.phone}`} className="contact-link">{currentContent.phone}</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">✉️</span>
                  </div>
                  <a href={`mailto:${currentContent.email}`} className="contact-link">{currentContent.email}</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">🌐</span>
                  </div>
                  <a href={currentContent.website} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {language === 'am' ? 'ድህረ ገጽ ይጎብኙ' : 'Visit Website'}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href="#services" className="cta-button primary">
                <span className="button-text">{language === 'am' ? 'አገልግሎቶቻችን' : 'Our Services'}</span>
                <span className="button-arrow">→</span>
              </a>
              <a href="#contact" className="cta-button secondary">
                <span className="button-text">{language === 'am' ? 'ነፃ ምክር' : 'Free Consultation'}</span>
                <span className="button-icon">⚖️</span>
              </a>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>{language === 'am' ? 'ለመቀጠል ይሸብልሉ' : 'Scroll to continue'}</span>
          </div>
        </section>

        {/* ABOUT FIRM */}
        <section className="section about-section" id="about">
          <div className="section-decoration">
            <div className="decoration-line left"></div>
            <div className="decoration-icon floating-icon">⚖️</div>
            <div className="decoration-line right"></div>
          </div>
          
          <h2>
            <span className="section-number">01</span>
            <span className="section-title">{currentContent.about}</span>
          </h2>
          
          <div className="profile-card">
            <div className="profile-badge">
              <div className="badge-content">
                <span className="badge-number">30+</span>
                <span className="badge-text">{language === 'am' ? 'ዓመታት ልምድ' : 'Years Experience'}</span>
              </div>
            </div>
            
            <div className="profile-content">
              <div className="content-wrapper">
                <p style={{ whiteSpace: 'pre-line' }}>{currentContent.aboutText}</p>
              </div>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">{language === 'am' ? 'ደንበኞች' : 'Clients'}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">{language === 'am' ? 'የተሳካ መጠን' : 'Success Rate'}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">{language === 'am' ? 'ደጋፊ አገልግሎት' : 'Support'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-dark services-section" id="services">
          <div className="section-background">
            <div className="bg-pattern"></div>
          </div>
          
          <h2>
            <span className="section-number">02</span>
            <span className="section-title">{currentContent.services}</span>
          </h2>
          
          <div className="services-grid">
            {currentContent.servicesList.map(([title, text], i) => (
              <div className="service-card" key={i}>
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <span className="card-icon floating-icon">{['📋', '💼', '⚔️', '💰', '🛡️', '🌍'][i]}</span>
                  </div>
                  <div className="card-number">{`0${i + 1}`}</div>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="card-hover">
                  <span className="hover-text">{language === 'am' ? 'ተጨማሪ ያንብቡ' : 'Learn More'}</span>
                  <span className="hover-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="section partners-section" id="partners">
          <h2>
            <span className="section-number">03</span>
            <span className="section-title">{currentContent.partners}</span>
          </h2>
          
          <div className="partners-grid">
            {currentContent.partnersList.map(([name, title, description], i) => (
              <div className="partner-card" key={i}>
                <div className="partner-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">{['👨‍⚖️', '👨‍💼', '👨‍🎓', '👨‍⚖️'][i]}</span>
                  </div>
                  <div className="experience-badge">
                    <span className="exp-years">
                      {i === 0 ? '30+' : i === 1 ? '20+' : '25+'}
                    </span>
                    <span className="exp-text">{language === 'am' ? 'ዓመታት' : 'Years'}</span>
                  </div>
                </div>
                <div className="partner-info">
                  <h3>{name}</h3>
                  <div className="partner-title">{title}</div>
                  <p>{description}</p>
                  <div className="partner-contact">
                    <a href="#contact" className="contact-btn">
                      {language === 'am' ? 'አግኙን' : 'Contact'} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section className="section-dark articles-section" id="articles">
          <div className="section-background">
            <div className="bg-texture"></div>
          </div>
          
          <h2>
            <span className="section-number">04</span>
            <span className="section-title">{currentContent.articles}</span>
          </h2>
          
          <div className="articles-grid">
            {currentContent.articlesList.map(([title, text], i) => (
              <div className="article-card" key={i}>
                <div className="article-date">
                  <span className="date-day">01</span>
                  <span className="date-month">MAR</span>
                  <span className="date-year">2024</span>
                </div>
                <div className="article-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="article-footer">
                    <button className="read-more" onClick={() => handleReadMore(title)}>
                      {language === 'am' ? 'አንብብ' : 'Read More'} →
                    </button>
                    <div className="article-category">
                      {language === 'am' ? 'ሕግ' : 'Law'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="articles-cta">
            <button className="view-all" onClick={handleViewAllArticles}>
              {language === 'am' ? 'ሁሉንም ጽሑፎች ይመልከቱ' : 'View All Articles'} →
            </button>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="section expertise-section" id="expertise">
          <h2>
            <span className="section-number">05</span>
            <span className="section-title">{currentContent.expertise}</span>
          </h2>
          
          <div className="expertise-container">
            <div className="expertise-list">
              {currentContent.expertiseList.map((item, i) => (
                <div className="expertise-item" key={i}>
                  <div className="expertise-icon-wrapper">
                    <div className="icon-circle">
                      <span className="expertise-icon">✓</span>
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="expertise-content">
                    <h4>{item.split('–')[0]}</h4>
                    <p>{item.split('–')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="expertise-visual">
              <div className="visual-circle">
                <div className="circle-text">
                  <span>{language === 'am' ? 'ልዩ ሙያ' : 'Expertise'}</span>
                  <span className="circle-subtext">100%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="section newsletter-section">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h2>
                <span className="section-icon floating-icon">📬</span>
                {currentContent.newsletter}
              </h2>
              <p>{currentContent.newsletterText}</p>
              
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder={language === 'am' ? 'የኢሜይል አድራሻ' : 'Email address'}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  <span>{language === 'am' ? 'ይመዝገቡ' : 'Subscribe'}</span>
                  <span className="button-arrow">→</span>
                </button>
              </form>
              
              <div className="privacy-note">
                {language === 'am' 
                  ? 'ኢሜይልዎን በማንኛውም ጊዜ ማቋረጥ ይችላሉ። ግላዊነትዎ የተጠበቀ ነው።'
                  : 'You can unsubscribe at any time. Your privacy is protected.'}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <h2>
            <span className="section-number">06</span>
            <span className="section-title">{language === 'am' ? 'አግኙን' : 'Contact Us'}</span>
          </h2>
          
          {submitMessage && (
            <div className={`alert-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <h3>{language === 'am' ? 'የሕግ ምክር ያግኙ' : 'Get Legal Consultation'}</h3>
                
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="detail-icon-wrapper">
                      <span className="detail-icon">📍</span>
                    </div>
                    <div className="detail-content">
                      <strong>{language === 'am' ? 'አድራሻ' : 'Location'}</strong>
                      <p>{currentContent.location}</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="detail-icon-wrapper">
                      <span className="detail-icon">📞</span>
                    </div>
                    <div className="detail-content">
                      <strong>{language === 'am' ? 'ስልክ' : 'Phone'}</strong>
                      <p><a href={`tel:${currentContent.phone}`} className="contact-link">{currentContent.phone}</a></p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="detail-icon-wrapper">
                      <span className="detail-icon">✉️</span>
                    </div>
                    <div className="detail-content">
                      <strong>Email</strong>
                      <p><a href={`mailto:${currentContent.email}`} className="contact-link">{currentContent.email}</a></p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="detail-icon-wrapper">
                      <span className="detail-icon">🌐</span>
                    </div>
                    <div className="detail-content">
                      <strong>{language === 'am' ? 'ድህረ ገጽ' : 'Website'}</strong>
                      <p><a href={currentContent.website} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {currentContent.website}
                      </a></p>
                    </div>
                  </div>
                </div>
                
                <div className="availability">
                  <h4>🕒 {language === 'am' ? 'የስራ ሰዓቶች' : 'Office Hours'}</h4>
                  <p>• {language === 'am' ? 'ሰኞ - ዓርብ: 8:30 ጥዋት - 5:30 ከሰዓት' : 'Monday - Friday: 8:30 AM - 5:30 PM'}</p>
                  <p>• {language === 'am' ? 'ቅዳሜ: 9:00 ጥዋት - 1:00 ከሰዓት' : 'Saturday: 9:00 AM - 1:00 PM'}</p>
                  <p>• {language === 'am' ? 'አስቸኳይ ምክር ይገኛል' : 'Emergency consultations available'}</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="form-card">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder={language === 'am' ? 'ሙሉ ስም' : 'Full Name'}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder={language === 'am' ? 'የኢሜይል አድራሻ' : 'Email Address'}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <select name="service" required>
                      <option value="">{language === 'am' ? 'የሚያስፈልግዎ የሕግ አገልግሎት ይምረጡ' : 'Select Legal Service Needed'}</option>
                      <option value="advisory">{language === 'am' ? 'የሕግ ምክር አገልግሎቶች' : 'Legal Advisory Services'}</option>
                      <option value="commercial">{language === 'am' ? 'ንግድ ሕግ' : 'Commercial Law'}</option>
                      <option value="litigation">{language === 'am' ? 'ፍርድ እና መከላከል' : 'Litigation & Defense'}</option>
                      <option value="tax">{language === 'am' ? 'ግብር ሕግ እና የፋይናንስ ስትራቴጂ' : 'Tax Law & Financial Strategy'}</option>
                      <option value="insurance">{language === 'am' ? 'ኢንሹራንስ እና ተጠያቂነት' : 'Insurance & Liability'}</option>
                      <option value="foreign">{language === 'am' ? 'የውጭ ኢንቨስትመንት' : 'Foreign Investment'}</option>
                      <option value="other">{language === 'am' ? 'ሌላ የሕግ ጉዳይ' : 'Other Legal Matter'}</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder={language === 'am' ? 'የሕግ ጉዳይዎን ይግለጹ...' : 'Describe your legal matter or inquiry...'}
                      required
                      rows="6"
                    ></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting 
                      ? (language === 'am' ? 'በመላክ ላይ...' : 'Sending...')
                      : (language === 'am' ? 'የሕግ ጥያቄ ይላኩ' : 'Send Legal Inquiry')
                    }
                    <span className="submit-arrow">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <h3>{currentContent.name}</h3>
              <p className="footer-tagline">
                {language === 'am' ? 'ማንኛውንም የሕግ አገልግሎት እንሰጣለን' : 'We provide any legal service'}
              </p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>{language === 'am' ? 'ፈጣን አገናኞች' : 'Quick Links'}</h4>
                <a href="#about">{language === 'am' ? 'ስለ ቢሮ' : 'About'}</a>
                <a href="#services">{language === 'am' ? 'አገልግሎቶች' : 'Services'}</a>
                <a href="#partners">{language === 'am' ? 'አጋሮች' : 'Partners'}</a>
                <a href="#articles">{language === 'am' ? 'ጽሑፎች' : 'Articles'}</a>
              </div>
              
              <div className="link-group">
                <h4>{language === 'am' ? 'አግኙን' : 'Contact'}</h4>
                <a href={`tel:${currentContent.phone}`}>{currentContent.phone}</a>
                <a href={`mailto:${currentContent.email}`}>{currentContent.email}</a>
                <a href={currentContent.website} target="_blank" rel="noopener noreferrer">
                  {language === 'am' ? 'ድህረ ገጽ' : 'Website'}
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {currentContent.name}. {language === 'am' ? 'ሁሉም መብቶች የተጠበቁ ናቸው።' : 'All rights reserved.'}</p>
            <div className="footer-legal">
              <a href={`${currentContent.website}/privacy`} target="_blank" rel="noopener noreferrer">
                {language === 'am' ? 'የግላዊነት ፖሊሲ' : 'Privacy Policy'}
              </a>
              <a href={`${currentContent.website}/terms`} target="_blank" rel="noopener noreferrer">
                {language === 'am' ? 'የአገልግሎት ውሎች' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
