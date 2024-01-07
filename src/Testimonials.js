import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      author: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'john-doe.jpg',
    },
    {
      id: 2,
      author: 'Jane Smith',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'jane-smith.jpg',
    },
    {
        id: 3,
        author: 'Emily Johnson',
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'emily-johnson.jpg',
      },
      {
        id: 4,
        author: 'Alex Rodriguez',
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'alex-rodriguez.jpg',
      },
  ];

  return (
    <div className="testimonials-container">
        <div className="testimonials-title">
            <h2>Testimonials</h2>
        </div>
      <div className="testimonials-list">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-stars">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
            </div>
            <img className="testimonial-image" src={testimonial.imageUrl} alt={testimonial.author} />
            <p className="quote">{testimonial.quote}</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
