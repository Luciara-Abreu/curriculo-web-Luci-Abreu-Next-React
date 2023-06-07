import React, { useState } from 'react';
import { ContainerCarousel } from './styles';

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ContainerCarousel>
      <div className="slide">
        {slides[currentIndex]}
      </div>

      <div className="carousel-controls">
        <button className="button" onClick={handlePrevSlide}>Voltar</button>
        <button className="button" onClick={handleNextSlide}>Próximo</button>
      </div>
    </ContainerCarousel>
  );
};

export default Carousel;
