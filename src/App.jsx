import { useEffect, useMemo, useState } from 'react';
import '../styles/style.css';
import heroPhoto from '../assets/profile.jpg';
import converterImage from '../assets/project-converter(1).jpg';
import weatherImage from '../assets/project-weather(1).jpg';
import notesImage from '../assets/project-notes.jpg';
import gbvImage from '../assets/project-gbv.jpg';

const cvUrl = new URL('../assets/Refilwe_Mokoena_CV2.pdf', import.meta.url).href;

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const projectCards = [
  {
    title: 'Converter Calculator',
    description: 'Unit conversion web app for length, weight and temperature.',
    image: converterImage,
    tags: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://refilwe15.github.io/task-4.4-starter/',
    actionLabel: 'View Project',
    icon: 'ri-external-link-line',
  },
  {
    title: 'Weather App',
    description: 'Live weather updates using an external API with a clean, responsive interface.',
    image: weatherImage,
    tags: ['React', 'API', 'Tailwind CSS'],
    href: 'https://weather-app-react-task4-codetribe.vercel.app/',
    actionLabel: 'View Project',
    icon: 'ri-external-link-line',
  },
  {
    title: 'Notes App',
    description: 'A mobile notes app that allows users to write, edit, and manage notes efficiently.',
    image: notesImage,
    tags: ['React Native', 'Mobile', 'Expo'],
    href: 'https://expo.dev/artifacts/eas/i15YAkBQTASjzdHDrPzKKC.apk',
    actionLabel: 'Install App',
    icon: 'ri-download-line',
  },
  {
    title: 'GBV Support App',
    description: 'Mobile app for Gender-Based Violence awareness, support resources, and reporting.',
    image: gbvImage,
    tags: ['React Native', 'Mobile', 'Social Impact'],
    href: 'https://expo.dev/accounts/refilwe15/projects/GBV-FRONT-REACT/builds/b7a89f1a-8e9c-4171-bec3-091f9e4151b9',
    actionLabel: 'Install App',
    icon: 'ri-download-line',
  },
];

const socialLinks = [
  {
    href: 'https://github.com/Refilwe15',
    label: 'GitHub',
    icon: 'ri-github-fill',
  },
  {
    href: 'https://www.linkedin.com/in/refilwe-mokoena-a86899375/',
    label: 'LinkedIn',
    icon: 'ri-linkedin-box-fill',
  },
  {
    href: 'mailto:mrefilwe880@gmail.com',
    label: 'Email',
    icon: 'ri-mail-line',
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('darkMode') === 'true';
  });
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    fadeEls.forEach((el) => fadeObserver.observe(el));
    return () => fadeObserver.disconnect();
  }, []);

  useEffect(() => {
    const sectionEls = document.querySelectorAll('.page-section');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sectionEls.forEach((section) => sectionObserver.observe(section));
    return () => sectionObserver.disconnect();
  }, []);

  const iconClass = darkMode ? 'ri-sun-line' : 'ri-moon-line';

  const internalNavItems = useMemo(
    () => [
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  );

  const scrollTo = (target) => {
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="dots-nav" aria-label="Page navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`dot ${activeSection === section.id ? 'active' : ''}`}
            data-target={section.id}
            title={section.label}
            onClick={() => scrollTo(section.id)}
            type="button"
          />
        ))}
      </nav>

      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">RM</div>
          <nav>
            <ul className="nav-links">
              {internalNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={activeSection === item.href.slice(1) ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-right">
            <button
              className="dark-toggle"
              onClick={() => setDarkMode((current) => !current)}
              aria-label="Toggle dark mode"
              type="button"
            >
              <i className={iconClass} />
            </button>
            <a href="#contact" className="btn-talk">
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero page-section">
          <div className="container hero-inner">
            <div className="hero-photo fade-in">
              <div className="hero-photo-wrap">
                <img src={heroPhoto} alt="Refilwe Mokoena" />
              </div>
            </div>

            <div className="hero-text">
              <p className="hello-tag fade-in">Hello, I'm</p>
              <h1 className="fade-in fade-in-delay-1">
                Refilwe <span>Mokoena</span>
              </h1>
              <p className="hero-subtitle fade-in fade-in-delay-2">
                I am a <strong>Software Developer</strong>
              </p>
              <p className="hero-desc fade-in fade-in-delay-2">
                Computer Science Graduate &amp; UI/UX Designer building clean,
                modern web &amp; mobile applications that solve real-world problems.
              </p>
              <div className="hero-actions fade-in fade-in-delay-3">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href={cvUrl} target="_blank" rel="noreferrer" className="btn-outline">
                  Download CV
                </a>
              </div>
              <div className="hero-socials fade-in fade-in-delay-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    aria-label={link.label}
                  >
                    <i className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="scroll-hint">
            <i className="ri-arrow-down-line" />
          </div>
        </section>

        <section id="about" className="about page-section">
          <div className="container about-inner">
            <p className="section-label fade-in">About Me</p>
            <h2 className="section-title fade-in fade-in-delay-1">
              Who I am &amp; what I <span>do.</span>
            </h2>

            <div className="about-intro fade-in fade-in-delay-2">
              <p>
                I have practical experience in <strong>web and mobile development</strong> and
                <strong>UI/UX design</strong>, working with Java, JavaScript,
                Kotlin, React, React Native, SQL, JSP, and Servlets.
              </p>
              <p>
                I enjoy building clean, modern, user-friendly, and well-designed
                applications that solve real-world problems.
              </p>
            </div>

            <div className="about-cards">
              <div className="about-card fade-in fade-in-delay-2">
                <div className="card-icon">
                  <i className="ri-graduation-cap-line" />
                </div>
                <h3>Education</h3>
                <p className="inst">Tshwane University of Technology</p>
                <p className="role">Diploma in Computer Science (2025)</p>
                <p>
                  Studied programming, databases, software engineering, web &amp;
                  mobile development.
                </p>
              </div>
              <div className="about-card fade-in fade-in-delay-3">
                <div className="card-icon">
                  <i className="ri-briefcase-line" />
                </div>
                <h3>Experience</h3>
                <p className="inst">mLab Codetribe</p>
                <p className="role">Software Developer Trainee</p>
                <ul>
                  <li>Built web &amp; mobile apps with React, React Native, Tailwind CSS</li>
                  <li>Backend development with Node.js</li>
                  <li>Git/GitHub for version control &amp; collaboration</li>
                  <li>Debugged and optimized apps for performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects page-section">
          <div className="container projects-inner">
            <p className="section-label fade-in">Portfolio</p>
            <h2 className="section-title fade-in fade-in-delay-1">
              Selected <span>work.</span>
            </h2>

            <div className="projects-grid">
              {projectCards.map((project) => (
                <div className="project-card fade-in fade-in-delay-1" key={project.title}>
                  <img src={project.image} alt={project.title} />
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
                      {project.actionLabel} <i className={project.icon} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-more-wrap fade-in">
              <a
                href="https://github.com/Refilwe15"
                target="_blank"
                rel="noreferrer"
                className="btn-view-more"
              >
                View More on GitHub <i className="ri-github-fill" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact page-section">
          <div className="container contact-inner-wrap">
            <p className="section-label fade-in">Contact</p>
            <h2 className="section-title fade-in fade-in-delay-1">
              Let's work <span>together.</span>
            </h2>

            <div className="contact-inner">
              <div className="contact-left fade-in fade-in-delay-2">
                <p>
                  Have a project in mind or want to discuss an opportunity? I'd love
                  to hear from you.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <i className="ri-mail-line" />
                    </div>
                    mrefilwe880@gmail.com
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <i className="ri-map-pin-line" />
                    </div>
                    Gauteng, South Africa
                  </div>
                </div>
              </div>

              <div className="contact-form fade-in fade-in-delay-3">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Tell me about your project..." />
                </div>
                <button className="btn-send" type="button">
                  Send Message <i className="ri-send-plane-line" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <p className="footer-copy">
              © 2026 <a href="#">Refilwe Mokoena</a>. All rights reserved.
            </p>
            <div className="footer-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
