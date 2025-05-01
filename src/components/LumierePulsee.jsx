import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SECTIONS = [
  {
    title: "Introduction à la lumière pulsée",
    text: "La lumière pulsée, ou IPL (Intense Pulsed Light), est une technologie avancée utilisée en dermatologie et en esthétique pour diverses applications, notamment l'épilation et le photorajeunissement.",
    image: "/img/epilation4.webp",
    alt: "Introduction Lumière Pulsée",
    position: "left"
  },
  {
    title: "Qu'est-ce que la lumière pulsée ?",
    text: "L'IPL utilise des flashs de lumière à haute intensité pour cibler des structures spécifiques dans la peau. Lorsqu'il est utilisé pour l'épilation, l'IPL cible la mélanine dans les follicules pileux pour les détruire et prévenir la repousse.",
    image: "/img/epilation6.webp",
    alt: "Qu'est-ce que la Lumière Pulsée",
    position: "right"
  },
  {
    title: "Les avantages de la lumière pulsée",
    text: "L'IPL offre des résultats durables pour l'épilation, souvent visibles après quelques séances. En plus de l'épilation, l'IPL est efficace pour traiter les taches pigmentaires, les rougeurs et améliorer la texture de la peau. Moins douloureuse que d'autres méthodes d'épilation, l'IPL est souvent décrite comme une sensation de picotement.",
    image: "/img/epilation5.webp",
    alt: "Avantages de la Lumière Pulsée",
    position: "left"
  },
  {
    title: "Applications de la lumière pulsée",
    text: "L'IPL est utilisé pour réduire de manière significative la croissance des poils. Elle améliore également la texture de la peau, réduit les taches de vieillesse, et traite les dommages causés par le soleil.",
    image: "/img/epilation3.webp",
    alt: "Applications de la Lumière Pulsée",
    position: "right"
  },
  {
    title: "Sécurité et précautions",
    text: "L'IPL est une méthode sûre lorsqu'elle est effectuée par des professionnels qualifiés. Des lunettes de protection doivent être portées pour éviter les dommages oculaires. Avant un traitement IPL, il est recommandé d'éviter l'exposition au soleil et de ne pas utiliser d'autobronzants.",
    image: "/img/epilation7.webp",
    alt: "Sécurité et Précautions",
    position: "left"
  }
];

const LumierePulsee = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, mirror: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-6 lg:p-12">
      <h1 className="text-4xl lg:text-4xl text-center tracking-wider mb-16">Tout savoir sur la lumière pulsée</h1>
      <div className="space-y-16">
        {SECTIONS.map((section, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row ${section.position === "right" ? "lg:flex-row-reverse" : ""} items-center gap-10`} 
            data-aos="fade-up"
          >
            <div className="flex-1">
              <img
                src={section.image}
                alt={section.alt}
                className="w-full rounded-2xl shadow-xl object-cover max-h-[320px]"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-primary">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LumierePulsee;
