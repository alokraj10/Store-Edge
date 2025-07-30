
import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        Stor-Edge
        <img src="/logos.png" alt="logo-icon" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>

      <div className="auth-section">
        <a href="#login" className="login-link">Login</a>
        <a href="#signup" className="signup-link">Signup</a>
        <img src="/userpic.jpg" alt="User" className="user-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
