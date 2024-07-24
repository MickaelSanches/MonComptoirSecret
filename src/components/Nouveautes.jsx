import { useState, useEffect } from 'react';

const nouveautesItems = [
  { type: 'video', src: '/img/epilation.mp4' },
  { type: 'image', src: '/img/epilation1.webp' },
  { type: 'image', src: '/img/epilation2.webp' },
  { type: 'image', src: '/img/epilation3.webp' },
  { type: 'image', src: '/img/epilation.webp' },
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
    <section className="nouveautes-section p-4 mb-8 relative w-full">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Nouveautés</h2>
      <p className="mb-4 text-center text-black">
        Découvrez les dernières nouveautés et promotions de notre institut. Profitez de nos nouvelles offres et soins exclusifs !
      </p>
      <div className="nouveautes-container relative w-full">
        <style>{`
          .nouveautes-container {
            position: relative;
            width: 100%;
            height: auto;
            margin: auto;
            overflow: hidden;
            border-radius: 10px;
          }

          .nouveautes-carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
            transform: translateX(-${currentIndex * 100}%);
            height: auto;
          }

          .nouveautes-slide {
            min-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
          }

          .nouveautes-image {
            width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 15px;
          }

          .nouveautes-video {
            width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 15px;
          }
        `}</style>
        <div className="nouveautes-carousel">
          {nouveautesItems.map((item, index) => (
            item.type === 'image' ? (
              <div key={index} className="nouveautes-slide">
                <img src={item.src} alt={`Slide ${index}`} className="nouveautes-image" />
              </div>
            ) : (
              <div key={index} className="nouveautes-slide">
                <video src={item.src} autoPlay loop muted className="nouveautes-video" />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
