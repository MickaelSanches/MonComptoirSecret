import { useState, useEffect } from 'react';

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
    <section className="nouveautes-section p-4 mb-8 relative">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Nouveautés</h2>
      <p className="mb-4 text-center text-black">
        Découvrez les dernières nouveautés et promotions de notre institut. Profitez de nos nouvelles offres et soins exclusifs !
      </p>
      <div className="nouveautes-container relative">
        <div className="background-image-container absolute inset-0 z-0">
          {nouveautesImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background Slide ${index}`}
              className={`background-image transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div className="relative z-10">
          <style>{`
            .nouveautes-container {
              position: relative;
              width: 100%;
              max-width: 100%;
              height: 500px;
              margin: auto;
              overflow: hidden;
              border-radius: 10px;
            }

            .nouveautes-carousel {
              display: flex;
              transition: transform 0.5s ease-in-out;
              transform: translateX(-${currentIndex * 100}%);
              height: 100%;
            }

            .nouveautes-slide {
              min-width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }

            .nouveautes-image {
              max-width: 100%;
              max-height: 100%;
              object-fit: fill;
              border-radius: 15px;
            }

            .background-image-container {
              filter: blur(10px);
              overflow: hidden;
            }

            .background-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
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
      </div>
    </section>
  );
};

export default Nouveautes;
