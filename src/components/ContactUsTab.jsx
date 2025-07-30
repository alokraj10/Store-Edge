import React, { useState } from 'react';
import './ContactUsTab.css';
import ContactPopup from './ContactPopup';

const ContactUsTab = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="contact-us-tab">
        <img src="/fone.jpg" alt="Contact Us" className="contact-us-image" />
        <div className="contact-us-text">
          <p>Contact Us</p>
          <button className="glow-button" onClick={() => setShowPopup(true)}>Click Here</button>
        </div>
      </div>

      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default ContactUsTab;
