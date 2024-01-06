import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-subtitle">Chicago</h3>
        <p className="about-description">
          We are a family-owned Mediterranean restaurant, bringing the flavors of the region
          to the heart of Chicago. At Little Lemon, we are passionate about providing
          a delightful dining experience with a modern twist on traditional recipes.
        </p>
      </div>
      <div className="about-images">
        <img src="Mario and Adrian A.jpg" alt="About Little Lemon" />
        <img src="Mario and Adrian b.jpg" alt="About us" />
      </div>
    </div>
  );
};

export default About;
