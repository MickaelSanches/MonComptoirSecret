import { useState, useEffect } from 'react';

const nouveautesItems = [
  { type: 'video', src: '/img/epilation.mp4' },
  { type: 'image', src: '/img/epilation1.webp' },
  { type: 'image', src: '/img/epilation2.webp' },
  { type: 'image', src: '/img/epilation3.webp' },
];

const Nouveautes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === nouveautesItems.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change item every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="nouveautes-section mb-8 mt-16 relative w-full">
      <h2 className="tracking-wider text-2xl mb-4 text-center text-gray-800">NOUVEAUTÉS</h2>
      <p className="mb-4 text-center text-gray-800">
        Découvrez les dernières nouveautés et promotions de notre institut. Profitez de nos nouvelles offres et soins exclusifs !
      </p>
      <div className="nouveautes-container relative w-full">
        <style>{`
          .nouveautes-container {
            position: relative;
            width: 100vw;
            height: auto;
            overflow: hidden;
          }

          .nouveautes-carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
            transform: translateX(-${currentIndex * 100}%);
            height: auto;
          }

          .nouveautes-slide {
            min-width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
          }

          .nouveautes-image, .nouveautes-video {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        `}</style>
        <div className="nouveautes-carousel">
          {nouveautesItems.map((item, index) => (
            item.type === 'image' ? (
              <div key={index} className="nouveautes-slide">
                <img src={item.src} loading="lazy" alt={`Slide ${index}`} className="nouveautes-image" />
              </div>
            ) : (
              <div key={index} className="nouveautes-slide">
                <video src={item.src} loading="lazy" autoPlay loop muted className="nouveautes-video" />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
