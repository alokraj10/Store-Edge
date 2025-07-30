import React from 'react';

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <h2>Our Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Real-Time Updates</h3>
            <p>Stay updated on your inventory levels in real-time.</p>
          </div>
          <div className="card">
            <h3>Reports and Analytics</h3>
            <p>Gain valuable insights into your inventory data.</p>
          </div>
          <div className="card">
            <h3>Cloud Integration</h3>
            <p>Access your data securely from anywhere with cloud integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
