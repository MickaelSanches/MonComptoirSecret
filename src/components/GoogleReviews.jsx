import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Ajoutez ce script uniquement si Elfsight n'a pas encore été chargé
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.dataset.useServiceCore = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mx-auto" style={{ width: '50%', height: '30%'}}>
      <h2 className="text-2xl font-bold mb-4">Avis Google</h2>
      <div className="elfsight-app-26e0cd9c-145e-4ff6-8e65-ce5b61c50216" data-elfsight-app-lazy ></div>
    </div>
  );
};

export default GoogleReviews;
