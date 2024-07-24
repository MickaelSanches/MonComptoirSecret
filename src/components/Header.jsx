import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-header text-black p-1 flex justify-between items-center">
      <a href="#accueil">
    <img 
    src="/img/logosansfond.webp" 
    alt="Logo de Mon Comptoir Secret" 
    id="accueil-logo" 
    className="w-60 h-auto"
    />
  </a>
      <nav className="hidden md:flex space-x-4 text-black">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gradientStart">Accueil</a></li>
          <li><a href="/prestations" className="hover:text-gradientStart">Prestations</a></li>
          <li><a href="/histoire" className="hover:text-gradientStart">Histoire</a></li>
          <li><a href="/shop" className="hover:text-gradientStart">Shop</a></li>
          <li><a href="/espace-client" className="hover:text-gradientStart">Espace Client</a></li>
          <li><a href="/contact" className="hover:text-gradientStart">Contact</a></li>
        </ul>
      </nav>
      <div className="md:hidden">
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
    </header>
  );
};

export default Header;
