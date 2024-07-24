import React, { useState, useEffect } from 'react';

const nouveautesImages = [
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
      setCurrentIndex((prevIndex) => (prevIndex === nouveautesImages.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="nouveautes-section p-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Nouveautés</h2>
      <p className="mb-4 text-black">
        Découvrez les dernières nouveautés et promotions de notre institut. Profitez de nos nouvelles offres et soins exclusifs !
      </p>
      <div className="nouveautes-container">
        <style jsx>{`
          .nouveautes-container {
            position: relative;
            width: 100%;
            max-width: 700px;
            height: 400px;
            margin: auto;
            overflow: hidden;
            border-radius: 10px;
          }

          .nouveautes-carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
            transform: translateX(-${currentIndex * 100}%);
          }

          .nouveautes-slide {
            min-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .nouveautes-image {
            width: auto;
            height: 400px;
            object-fit: cover;
          }
        `}</style>
        <div className="nouveautes-carousel">
          {nouveautesImages.map((image, index) => (
            <div key={index} className="nouveautes-slide">
              <img src={image} alt={`Slide ${index}`} className="nouveautes-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
