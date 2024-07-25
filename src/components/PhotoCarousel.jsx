import { useState } from "react";

const carouselImages = [
  '/img/7.webp',
  '/img/5.webp',
  '/img/6.webp',
  '/img/1.webp',
  '/img/2.webp',
  '/img/3.webp',
  '/img/4.webp',
  '/img/8.webp',
];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container mb-8">
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 700px;
          height: 500px;
          margin: auto;
          overflow: hidden;
          border-radius: 10px;
        }

        .carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
          transform: translateX(-${currentIndex * 100}%);
        }

        .carousel-slide {
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-image {
          width: auto;
          height: 500px;
          object-fit: cover;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: none;
        }

        .carousel-button.prev {
          left: 10px;
        }

        .carousel-button.next {
          right: 10px;
        }
      `}</style>
      <div className="carousel">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-slide">
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
