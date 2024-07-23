

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-1 flex justify-between items-center">
      <a href="#accueil">
    <img 
    src="/img/logosansfond.webp" 
    alt="Logo de Mon Comptoir Secret" 
    id="accueil-logo" 
    className="w-60 h-auto"
    />
  </a>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Accueil</a></li>
          <li><a href="/prestations" className="hover:text-gray-300">Prestations</a></li>
          <li><a href="/histoire" className="hover:text-gray-300">Histoire</a></li>
          <li><a href="/shop" className="hover:text-gray-300">Shop</a></li>
          <li><a href="/espace-client" className="hover:text-gray-300">Espace Client</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
