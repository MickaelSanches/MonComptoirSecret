import React from 'react';

const HistoireEstelle = () => {
  const navigateToHistoire = () => {
    window.location.href = '/histoire';
  };

  return (
    <section className="histoire-section p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Histoire de Estelle</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src="/img/Photo-CV.jpg" alt="Estelle" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4" />
        <div className="md:w-2/3">
          <p className="mb-4">
            Estelle, la fondatrice de notre institut, a toujours été passionnée par la beauté et le bien-être. Découvrez son incroyable parcours et les valeurs qui ont façonné notre institut.
          </p>
          <button
            onClick={navigateToHistoire}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-gradientStart"
          >
            Lire la suite
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistoireEstelle;
