import { useEffect } from 'react';

const Connect = () => {
  useEffect(() => {
    const container = document.getElementById('accountContainer');
    window.planity = {
      key: '-Ndenpt2NBzQXjUpPT0x',
      primaryColor: '#yourPrimaryColor',
      accountContainer: container,
      options: {
        afterLogin: () => {
          window.location.href = '/dashboard';
        }
      }
    };

    const polyfillScript = document.createElement('script');
    polyfillScript.src = '/js/polyfills.latest.js';
    polyfillScript.async = true;
    document.body.appendChild(polyfillScript);

    const appScript = document.createElement('script');
    appScript.src = '/js/app.latest.js';
    appScript.async = true;
    document.body.appendChild(appScript);
  }, []);

  return (
    <div id="accountContainer" className="min-h-screen bg-gray-100 flex items-center justify-center">
      Chargement du module de connexion...
    </div>
  );
};

export default Connect;
