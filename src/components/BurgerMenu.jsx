import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
      >
        <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      <nav className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 transform transition duration-300 ease-in-out ${isOpen ? 'scale-100' : 'scale-0'}`}>
        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Accueil</a>
        <a href="/prestations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Prestations</a>
        <a href="/histoire" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Histoire</a>
        <a href="/shop" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Shop</a>
        <a href="/espace-client" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Espace Client</a>
        <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
      </nav>
    </div>
  );
};

export default BurgerMenu;
