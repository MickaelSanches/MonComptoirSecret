import { useState, useEffect } from 'react';

const UserAccount = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const container = document.getElementById('planityAccountContainer');
    window.planity = {
      key: '-Ndenpt2NBzQXjUpPT0x',
      primaryColor: '#FF5733', // Remplacez par votre couleur primaire
      accountContainer: container,
      options: {
        onSuccess: () => {
          setIsAuthenticated(true);
        },
      },
    };

    const script1 = document.createElement('script');
    script1.src = '/js/polyfills.latest.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '/js/app.latest.js';
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/dashboard';
    }
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Mon Compte</h2>
        <div id="planityAccountContainer"></div>
      </div>
    </div>
  );
};

export default UserAccount;
