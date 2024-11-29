import React, { useEffect, useState } from 'react';
import Avatar from '../assets/Avatar.png';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial, progressInterval }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, progressInterval / 100);

    return () => clearInterval(interval);
  }, [testimonial, progressInterval]);

  return (
    <div className='testimonial-card'>
      <div className='progress-bar'>
        <div
          className='progress'
          style={{
            width: `${progress}%`,
            transition: 'width 0.1s linear',
          }}
        ></div>
      </div>
      <p className='testimonial-text'>"{testimonial.testimonial}"</p>
      <div className='writer-info'>
        <h3>{testimonial.name}</h3>
        <p>{testimonial.profession}</p>
        <img src={Avatar} alt={Avatar} />
      </div>
    </div>
  );
};

export default TestimonialCard;
