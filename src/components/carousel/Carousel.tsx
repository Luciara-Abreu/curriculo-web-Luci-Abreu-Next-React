import React, { useState } from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="slides">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, { key: index })
        )}
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;