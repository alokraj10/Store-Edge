import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactForm from './components/ContactForm';
import './App.css';

// Clerk Components
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Features />
      <Testimonials />
      <Footer />

      {/* Clerk Authentication */}
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      {/* Contact Us Button */}
      <button className="contact-us-button" onClick={toggleContactForm}>
        Contact Us
      </button>

      {/* Popup Contact Form */}
      {showContactForm && (
        <div className="popup-overlay">
          <div className="popup-content centered-popup">
            <ContactForm />
            <button className="close-button" onClick={toggleContactForm}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
