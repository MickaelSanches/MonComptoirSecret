import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-header text-black p-1 flex justify-between items-center z-50 relative">
      <a href="/">
        <img 
          src="/img/logosansfond.webp" 
          alt="Logo de Mon Comptoir Secret" 
          id="accueil-logo" 
          className="w-60 h-auto"
        />
      </a>
      <nav className="hidden md:flex space-x-4 text-gray-800 text-sm mr-4">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-buton tracking-wide">ACCUEIL</a></li>
          <li><a href="/prestations" className="hover:text-buton tracking-wide">PRESTATIONS</a></li>
          <li><a href="/histoire" className="hover:text-buton tracking-wide">HISTOIRE</a></li>
          <li><a href="/shop" className="hover:text-buton tracking-wide">SHOP</a></li>
          <li><a href="/lumiere-pulsee" className="hover:text-buton tracking-wide">LUMIÈRE PULSÉE</a></li>
          <li><a href="/prendre-rendez-vous" className="hover:text-buton tracking-wide">PRENDRE RDV</a></li>
          <li><a href="/contact" className="hover:text-buton tracking-wide">CONTACT</a></li>
        </ul>
      </nav>
      <div className="md:hidden mr-4">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-between w-8 h-6 focus:outline-none"
        >
          <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        <nav className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 transform transition duration-300 ease-in-out z-50 ${isOpen ? 'scale-100' : 'scale-0'}`}>
          <a href="/" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">ACCUEIL</a>
          <a href="/prestations" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">PRESTATIONS</a>
          <a href="/histoire" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">HISTOIRE</a>
          <a href="/shop" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">SHOP</a>
          <a href="/lumiere-pulsee" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">LUMIÈRE PULSÉE</a>
          <a href="/espace-client" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">PRENDRE RDV</a>
          <a href="/contact" className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
