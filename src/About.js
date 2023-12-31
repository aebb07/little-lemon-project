import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-subtitle">Chicago</h3>
        <article className="about-description">
          <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          </p>
          <p>
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
          </p>
        </article>
      </div>
      <aside className="about-images">
        <img src="Mario and Adrian A.jpg" alt="About Little Lemon" />
        <img src="Mario and Adrian b.jpg" alt="About us" />
      </aside>
    </section>
  );
};

export default About;
