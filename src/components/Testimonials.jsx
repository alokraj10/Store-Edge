import React from 'react';
import './Testimonials.css'; // Import the CSS file

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        <div className="card">
          <p>"This system has drastically improved our inventory management. The real-time tracking feature is a game-changer!"</p>
          <h4>- K.Bikash</h4>
        </div>
        <div className="card">
          <p>"Easy to use and extremely efficient. It has saved us hours of work every week. Highly recommend!"</p>
          <h4>- Rohit Singh</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
