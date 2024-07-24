import { useState } from "react";

const images = [
    '/img/Photo-CV.jpg',
    '/img/ARTISAN BEAUTE.png',
    '/img/LogoMike.png',
    '/img/logosansfond.webp',
    '/img/logomcs.webp',
  ];

  const PhotoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(index);
    };
  
    const nextSlide = () => {
      const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(index);
    };
  
    return (
      <div className="carousel-container">
        <style jsx>{`
          .carousel-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: auto;
            overflow: hidden;
          }
  
          .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
            transform: translateX(-${currentIndex * 100}%);
          }
  
          .carousel-slide {
            min-width: 100%;
            transition: opacity 0.5s ease-in-out;
          }
  
          .carousel-image {
            width: 100%;
            display: block;
          }
  
          .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
          }
  
          .carousel-button.prev {
            left: 10px;
          }
  
          .carousel-button.next {
            right: 10px;
          }
        `}</style>
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide`}
            >
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    );
  };
  
  export default PhotoCarousel;