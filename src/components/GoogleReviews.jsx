import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="google-reviews-container mb-8">
      <style>{`
        .google-reviews-container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          padding: 20px;
          overflow-x: hidden; /* Empêche le débordement horizontal */
          cursor: none;
        }
        body {
          overflow-x: hidden; /* Empêche le débordement du body */
        }
        .elfsight-app-26e0cd9c-145e-4ff6-8e65-ce5b61c50216 {
          max-width: 100%;
        }
      `}</style>
      <div className="elfsight-app-26e0cd9c-145e-4ff6-8e65-ce5b61c50216" data-elfsight-app-lazy></div>
    </div>
  );
};

export default GoogleReviews;
