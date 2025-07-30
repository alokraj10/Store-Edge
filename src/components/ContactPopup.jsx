import React from 'react';
import './ContactPopup.css';
import ContactForm from './ContactForm';

const ContactPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box small-popup">
        <button className="close-btn" onClick={onClose}>×</button>
        <ContactForm onClose={onClose} />
      </div>
    </div>
  );
};

export default ContactPopup;
