// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <h2>Welcome to My Website</h2>
      <p>This is a simple website created with React.</p>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>Hi, I am a web developer with a passion for building web applications using modern technologies like React.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

export default App;
