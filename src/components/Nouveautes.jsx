import React, { useState, useEffect } from 'react';

const images = [
  '/img/Photo-CV.jpg',
  '/img/ARTISAN BEAUTE.png',
  '/img/LogoMike.png',
  '/img/logosansfond.webp',
  '/img/logomcs.webp',
];

const Nouveautes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="nouveautes-section p-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Nouveautés</h2>
      <p className="mb-4 text-black">
        Découvrez les dernières nouveautés et promotions de notre institut. Profitez de nos nouvelles offres et soins exclusifs !
      </p>
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
          }

          .carousel-image {
            width: 100%;
            display: block;
          }
        `}</style>
        <div className="carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
