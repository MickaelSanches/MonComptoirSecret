import { useState, useEffect } from 'react';

const nouveautesItems = [
  { type: 'video', src: '/img/Home1.mp4' },
];

const Nouveautes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === nouveautesItems.length - 1 ? 0 : prevIndex + 1));
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="nouveautes-section mb-8 relative w-full">
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

          .nouveautes-video {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .btn-light-therapy {
            position: absolute;
            bottom: 30%;
            left: 50%;
            transform: translate(-50%, 50%);
            padding: 15px 40px;
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
            cursor: none;
            text-align: center;
            white-space: nowrap;
            font-size: 18px;
            transition: all 0.3s ease;
          }

          .btn-light-therapy:hover {
            background-color: #d0afa8;
          }

          @media (max-width: 600px) {
            .btn-light-therapy {
              padding: 8px 15px;
              font-size: 12px;
            }
          }

          @media (min-width: 600px) and (max-width: 1024px) {
            .btn-light-therapy {
              padding: 10px 25px;
              font-size: 16px;
            }
          }

          @media (min-width: 1024px) {
            .btn-light-therapy {
              padding: 15px 40px;
              font-size: 18px;
            }
          }
        `}</style>
        <div className="nouveautes-carousel">
          {nouveautesItems.map((item, index) => (
            item.type === 'image' ? (
              <div key={index} className="nouveautes-slide">
                <img src={item.src} loading="lazy" alt={`Slide ${index}`} className="nouveautes-image" />
              </div>
            ) : (
              <div key={index} className="nouveautes-slide relative">
                <video src={item.src} loading="lazy" autoPlay loop muted className="nouveautes-video" />
                {item.src === '/img/Home1.mp4' && (
                  <a href="/lumiere-pulsee" className="btn-light-therapy">En savoir plus</a>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
