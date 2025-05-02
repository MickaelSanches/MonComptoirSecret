import { useRef, useEffect } from "react";
import Header from "../components/Header.jsx";

const prestations = [
  { title: "Onglerie", image: "/img/7.webp", link: "/#onglerie", cta: false },
  {
    title: "Beauté du Regard",
    image: "/img/8.webp",
    link: "/#regard",
    cta: false,
  },
  {
    title: "Épilation Définitive",
    image: "/img/epilation1.webp",
    link: "/epilation-definitive",
    cta: true,
  },
  {
    title: "Photorajeunissement",
    image: "/img/photorajeunissement.webp",
    link: "/photorajeunissement",
    cta: true,
  },
  {
    title: "Épilation Classique",
    image: "/img/epilationclassique.webp",
    link: "/#epilation",
    cta: false,
  },
  {
    title: "Maquillage",
    image: "/img/maquillage.webp",
    link: "/#maquillage",
    cta: false,
  },
  {
    title: "Produits & Bijoux",
    image: "/img/bijoux.webp",
    link: "/shop",
    cta: true,
  },
];

export default function PrestationsSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("prestations-lock-scroll");
    document.documentElement.style.overflow = "hidden";

    const container = containerRef.current;
    const intro = document.getElementById("intro-text");

    let scrollTarget = 0;
    let isTicking = false;

    const handleWheel = (e) => {
      if (!container) return;
      e.preventDefault();

      scrollTarget += e.deltaY;

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(() => {
          container.scrollBy({ left: scrollTarget * 0.05, behavior: "smooth" });
          scrollTarget = 0;
          isTicking = false;

          const scrollLeft = container.scrollLeft;
          if (intro) {
            const opacity = Math.min(1, Math.max(1 - scrollLeft / 1500, 0));
            const translate = Math.min(scrollLeft * 0.05, 100);
            intro.style.opacity = opacity.toString();
            intro.style.transform = `translateX(-${translate}px)`;
          }
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      document.body.classList.remove("prestations-lock-scroll");
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Header client:load />
      <div
        ref={containerRef}
        className="flex overflow-x-scroll overflow-y-hidden h-[100dvh] scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          id="intro-text"
          className="flex-shrink-0 w-[75vw] h-full flex flex-col justify-center items-center pl-20 pr-8 transition-all duration-700 ease-out 
          lg:w-[75vw] lg:px-20 
          md:w-[90vw] md:px-6 
          sm:px-4 sm:pt-20"
          style={{
            scrollSnapAlign: "start",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <h1 className="text-8xl font-caslon text-black mb-2 lg:text-8xl md:text-6xl sm:text-4xl text-center">
            NOS PRESTATIONS
          </h1>
          <p className="uppercase tracking-widest text-gray-600 text-md md:text-sm">
            Swiper
          </p>
          <div className="relative w-6 h-6 mt-3 overflow-visible">
            <div className="absolute left-0 top-0 animate-arrow-loop w-6 h-6 border-b-2 border-r-2 border-black rotate-[135deg] opacity-70"></div>
          </div>
        </div>

        {prestations.map((item, i) => (
          <div
            key={i}
            className="prestations-card flex-shrink-0 w-[20vw] h-[82vh] mx-2 m-4 relative group 
            lg:w-[25vw] lg:h-[75vh] 
            md:w-[60vw] md:h-[70vh] 
            sm:w-[85vw] sm:h-[65vh]"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute bottom-10 left-10 md:bottom-6 md:left-6 sm:bottom-4 sm:left-4">
              {item.cta && (
                <a
                  href={item.link}
                  className="text-black text-md animate-pulse-custom md:text-sm sm:text-xs"
                >
                  Découvrir
                </a>
              )}
              <h2 className="text-4xl text-black md:text-3xl sm:text-xl break-words whitespace-normal">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
