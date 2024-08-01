import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookiePreferences = localStorage.getItem('cookiePreferences');
        if (!cookiePreferences) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiePreferences', JSON.stringify({ analytics: true, marketing: true }));
        setShowBanner(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookiePreferences', JSON.stringify({ analytics: false, marketing: false }));
        setShowBanner(false);
    };

    return (
        showBanner && (
            <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 cookie-banner">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-sm">Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre politique de confidentialité.</p>
                    <div>
                        <button onClick={handleAccept} className="bg-primary text-black px-4 py-2 rounded mr-2 hover:bg-gradientStart hover:text-white">Accepter</button>
                        <button onClick={handleReject} className="bg-gradientStart text-white px-4 py-2 rounded mr-2 hover:bg-primary hover:text-black">Rejeter</button>
                    </div>
                </div>
                <style>
                    {`
                        .cookie-banner a,
                        .cookie-banner button {
                            cursor: none;
                        }
                    `}
                </style>
            </div>
        )
    );
};

export default CookieBanner;
