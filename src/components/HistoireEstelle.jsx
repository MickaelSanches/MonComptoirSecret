import React from 'react';

const HistoireEstelle = () => {
  const navigateToHistoire = () => {
    window.location.href = '/histoire';
  };

  return (
    <section 
    className="histoire-section p-4 bg-gray-100 rounded-lg shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300" 
    style={{ maxWidth: '1000px', position: 'relative', right: '-25%' }}>
      <h2 className="text-2xl font-bold mb-4 text-black">Histoire de Estelle</h2>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4">
          <img src="/img/Photo-CV.jpg" alt="Estelle" className="w-full h-full rounded-full object-cover" />
        </div>
        <p className="mb-4 text-center text-black">
          Estelle, la fondatrice de notre institut, a toujours été passionnée par la beauté et le bien-être. Découvrez son incroyable parcours et les valeurs qui ont façonné notre institut.
        </p>
        <button
          onClick={navigateToHistoire}
          className="px-4 py-2 bg-primary text-black rounded-lg hover:bg-gradientStart hover:text-white"
        >
          Lire la suite
        </button>
      </div>
    </section>
  );
};

export default HistoireEstelle;
