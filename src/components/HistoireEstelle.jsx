import React from 'react';

const HistoireEstelle = () => {
  const navigateToHistoire = () => {
    window.location.href = '/histoire';
  };

  return (
    <section 
      className="histoire-section p-4 bg-primary rounded-lg shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300 mx-auto" 
      style={{ maxWidth: '1000px' }}>
      <h2 className="text-2xl font-bold mb-4 text-black text-center">Histoire de Estelle</h2>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-4">
          <img src="/img/estelle.webp" loading="lazy" alt="Estelle" className="w-full h-full rounded-full object-cover" />
        </div>
        <p className="mb-4 text-center text-black">
          Estelle, la fondatrice de notre institut, a toujours été passionnée par la beauté et le bien-être. Découvrez son incroyable parcours et les valeurs qui ont façonné notre institut.
        </p>
        <button
          onClick={navigateToHistoire}
          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gradientStart hover:text-white"
        >
          Lire la suite
        </button>
      </div>
    </section>
  );
};

export default HistoireEstelle;
