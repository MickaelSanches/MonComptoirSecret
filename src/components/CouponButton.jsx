import { useState, useEffect } from 'react';

const CouponButton = () => {
  const [code, setCode] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1h restante (3600 secondes)
  const [copied, setCopied] = useState(false);
  const [reserved, setReserved] = useState(false); // Confirmation de la réservation

  // Fonction pour générer un code aléatoire et lancer l'animation
  const generateCode = () => {
    const newCouponCode = `MCS-${Math.floor(1000 + Math.random() * 9000)}`;
    setCode(newCouponCode);
    
    setTimeout(() => {
      redirectToPlanity(); 
    }, 5000);
  };

  // Fonction de redirection vers Planity après 10 secondes
  const redirectToPlanity = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = "https://www.planity.com/mon-comptoir-secret-73100-aix-les-bains/reservation";
    }, 10000);
  };

  // Timer de compte à rebours
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fonction pour formater le temps restant en minutes:secondes
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Fonction pour copier le code dans le presse-papier
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-72 bg-center bg-cover">
      
      {/* Affichage du compte à rebours */}
      <div className="mb-4 text-black text-xl">
        Le coupon expire dans : {formatTime(timeLeft)}
      </div>

      <button 
        onClick={generateCode} 
        className="px-6 py-3 bg-primary text-black rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        Obtenir mon code
      </button>
      
      {code && (
        <div className="mt-6 text-center">
          <h3 className="text-4xl font-bold text-black">🎉 Félicitations ! 🎉</h3>
          <p className="mt-2 text-lg text-black">
            Voici votre code : <strong>{code}</strong>
          </p>
          <button 
            onClick={copyCode} 
            className="mt-2 px-4 py-2 bg-primary text-black rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none"
          >
            {copied ? 'Code copié !' : 'Copier le code'}
          </button>

          {/* Bouton de réservation avec redirection */}
          <p className="mt-4 text-black">
            {redirecting ? 'Redirection vers Planity dans quelques secondes...' : 'Cliquez pour réserver votre bilan        sur Planity !'}
      </p>
      <button 
        onClick={() => window.location.href = 'https://www.planity.com/mon-comptoir-secret-73100-aix-les-bains/reservation'} 
        className="mt-4 px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-primary transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        Réserver sur Planity
      </button>
    </div>
  )}
</div>
);
};

export default CouponButton;