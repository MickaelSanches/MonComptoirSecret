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

    return (
        isVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
                <div className="relative bg-white mt-16 shadow-lg max-w-xs md:max-w-md text-center animate-popup w-10/12 sm:w-8/12 md:w-auto cursor-none mx-4 transform translate-y-[-5%]">
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
                    {/* <h2 className="text-xl font-bold mb-2 text-black">
                        Dernières Promotions
                    </h2>
                    <p className="text-black">
                        Profitez de nos dernières offres spéciales sur les soins et produits
                    </p> */}
                </div>
            </div>
        )
    );
};

export default PromoPopup;
