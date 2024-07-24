

const Header = () => {
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
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gradientStart">Accueil</a></li>
          <li><a href="/prestations" className="hover:text-gradientStart">Prestations</a></li>
          <li><a href="/histoire" className="hover:text-gradientStart">Histoire</a></li>
          <li><a href="/shop" className="hover:text-gradientStart">Shop</a></li>
          <li><a href="/espace-client" className="hover:text-gradientStart">Espace Client</a></li>
          <li><a href="/contact" className="hover:text-gradientStart">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
