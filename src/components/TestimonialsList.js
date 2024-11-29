import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialsList.css';

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const progressInterval = 5000;

  useEffect(() => {
    fetch('https://dummyjson.com/c/a5f5-4102-4d26-8ec8')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.error('ERROR: ', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, progressInterval);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className='testimonials-container'>
      <TestimonialCard
        testimonial={testimonials[currentIndex]}
        progressInterval={progressInterval}
        key={currentIndex}
      />
    </div>
  );
};

export default TestimonialsList;
