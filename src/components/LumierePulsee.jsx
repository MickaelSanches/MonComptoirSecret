import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LumierePulsee = () => {
    useEffect(() => {
    AOS.init({
        duration: 1200,
        offset: 500,
        mirror: true,
    });
    }, []);

    return (
    <section className="max-w-7xl mx-auto p-4 mt-8 mb-8">
        <style>{`
        .category-section {
            margin-bottom: 1rem;
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content-frame {
            margin-top: 8rem;
            border: 2px solid #d0afa8;
            padding: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
            position: relative;
            width: 70%;
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .content-frame:hover {
            transform: scale(1.02);
        }
        .content-frame p {
            font-family: "Avenir Next", sans-serif;
            color: #555;
        }
        h1, h2 {
            font-family: "ITC Caslon No 224", serif;
            color: #333;
        }
        .section-image {
            position: absolute;
            width: 500px; 
            height: 200px; 
            object-fit: cover;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .image-top-left {
            top: -20%;
            left: -56%;
        }
        .image-bottom-right {
            bottom: -20%;
            right: -55%;
        }
            @media (max-width: 1024px) {
            .content-frame {
                margin-top: 1rem;
                width: 100%;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .section-image {
                position: static;
                width: 100%;
                height: auto;
                margin-bottom: 20px;
            }
            .image-top-left, .image-bottom-right {
                top: unset;
                bottom: unset;
                left: unset;
                right: unset;
            }
        }
        `}</style>
        <div className="category-section" data-aos="fade-up">
        <div className="content-frame">
            <img
            loading="lazy"
            src="/img/epilation4.webp"
            alt="Introduction Lumière Pulsée"
            className="section-image image-top-left"
            />
            <div>
            <h2 className="tracking-wider text-2xl mb-4 text-center">
                Introduction à la lumière pulsée
            </h2>
            <p className="text-lg mb-4">
                La lumière pulsée, ou IPL (Intense Pulsed Light), est une
                technologie avancée utilisée en dermatologie et en esthétique pour
                diverses applications, notamment l'épilation et le
                photorajeunissement.
            </p>
            </div>
        </div>
        </div>
        <div className="category-section" data-aos="fade-up">
        <div className="content-frame">
            <img
            loading="lazy"
            src="/img/epilation6.webp"
            alt="Qu'est-ce que la Lumière Pulsée"
            className="section-image image-bottom-right"
            />
            <div>
            <h2 className="tracking-wider text-2xl mb-4 text-center">
                Qu'est-ce que la lumière pulsée ?
            </h2>
            <p className="text-lg mb-4">
                L'IPL utilise des flashs de lumière à haute intensité pour cibler
                des structures spécifiques dans la peau. Lorsqu'il est utilisé
                pour l'épilation, l'IPL cible la mélanine dans les follicules
                pileux pour les détruire et prévenir la repousse.
            </p>
            </div>
        </div>
        </div>
        <div className="category-section" data-aos="fade-up">
        <div className="content-frame">
            <img
            loading="lazy"
            src="/img/epilation5.webp"
            alt="Avantages de la Lumière Pulsée"
            className="section-image image-top-left"
            />
            <div>
            <h2 className="tracking-wider text-2xl mb-4 text-center">
                Les avantages de la lumière pulsée
            </h2>
            <p className="text-lg mb-4">
                L'IPL offre des résultats durables pour l'épilation, souvent
                visibles après quelques séances. En plus de l'épilation, l'IPL est
                efficace pour traiter les taches pigmentaires, les rougeurs et
                améliorer la texture de la peau. Moins douloureuse que d'autres
                méthodes d'épilation, l'IPL est souvent décrite comme une
                sensation de picotement.
            </p>
            </div>
        </div>
        </div>
        <div className="category-section" data-aos="fade-up">
        <div className="content-frame">
            <img
            loading="lazy"
            src="/img/epilation3.webp"
            alt="Applications de la Lumière Pulsée"
            className="section-image image-bottom-right"
            />
            <div>
            <h2 className="tracking-wider text-2xl mb-4 text-center">
                Applications de la lumière pulsée
            </h2>
            <p className="text-lg mb-4">
                L'IPL est utilisé pour réduire de manière significative la
                croissance des poils. Elle améliore également la texture de la
                peau, réduit les taches de vieillesse, et traite les dommages
                causés par le soleil.
            </p>
            </div>
        </div>
        </div>
        <div className="category-section" data-aos="fade-up">
        <div className="content-frame">
            <img
            loading="lazy"
            src="/img/epilation7.webp"
            alt="Sécurité et Précautions"
            className="section-image image-top-left"
            />
            <div>
            <h2 className="tracking-wider text-2xl mb-4 text-center">
                Sécurité et précautions
            </h2>
            <p className="text-lg mb-4">
                L'IPL est une méthode sûre lorsqu'elle est effectuée par des
                professionnels qualifiés. Des lunettes de protection doivent être
                portées pour éviter les dommages oculaires. Avant un traitement
                IPL, il est recommandé d'éviter l'exposition au soleil et de ne
                pas utiliser d'autobronzants.
            </p>
            </div>
        </div>
        </div>
    </section>
    );
};

export default LumierePulsee;
