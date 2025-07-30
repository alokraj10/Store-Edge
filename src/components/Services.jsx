import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Inventory Management</h3>
          <p>Efficiently manage your inventory with ease.</p>
        </div>
        <div className="card">
          <h3>Stock Tracking</h3>
          <p>Track your stock levels and avoid shortages.</p>
        </div>
        <div className="card">
          <h3>Order Management</h3>
          <p>Manage your orders and shipments effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
