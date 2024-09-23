import { useState, useEffect } from "react";

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/") {
            setIsVisible(true);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "popup-overlay") {
            closePopup();
        }
    };

    return (
        isVisible && (
            <div
            id="popup-overlay"
            className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out"
            onClick={handleClickOutside}
            >
                <div className="relative bg-white p-1 mt-16 shadow-lg max-w-xs md:max-w-md text-center animate-popup w-10/12 sm:w-8/12 md:w-auto cursor-none mx-4 transform translate-y-[-5%]">
                    <button
                        onClick={closePopup}
                        className="absolute top-[-20px] right-[-20px] text-black bg-white p-2 shadow-lg hover:bg-gray-300 transition-all cursor-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 cursor-none"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    {/* 
                    <div className="video-container mb-4 mx-auto cursor-none" style={{ maxHeight: '600px' }}>
                        <video
                            id="promo-video"
                            controls
                            className="w-full cursor-none"
                            style={{ maxHeight: '600px' }}
                            autoPlay
                            loop
                            muted
                        >
                            <source src="/img/nouveaute.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    */}

                    {/* Image cliquable */}
                    <a href="/OffreCoupon">
                        <img
                            src="/img/promoipl.webp"
                            loading="lazy"
                            alt="Promotion"
                            className="w-full cursor-none"
                            style={{ maxHeight: '600px' }}
                        />
                    </a>
                </div>
            </div>
        )
    );
};

export default PromoPopup;
