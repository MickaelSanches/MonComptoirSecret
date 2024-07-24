import React from 'react';
import GoogleMap from '../components/GoogleMap.jsx';

const mapCoordinates = { lat: 45.69775390625, lng: 5.905280113220215 };
const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Footer = () => {
  return (
    <footer className="bg-gradient-footer p-8 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-4">Mon Comptoir Secret</h4>
          <ul>
            <li><a href="/prestations" className="hover:text-gradientStart">Prestations</a></li>
            <li><a href="/histoire" className="hover:text-gradientStart">Histoire</a></li>
            <li><a href="/shop" className="hover:text-gradientStart">Shop</a></li>
            <li><a href="/contact" className="hover:text-gradientStart">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:text-gradientStart">Mentions légales</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Suivez-nous</h4>
          <ul>
            <li><a href="https://www.instagram.com/moncomptoirsecret/" className="hover:text-gradientStart">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100093637038994" className="hover:text-gradientStart">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@moncomptoirsecret?lang=fr" className="hover:text-gradientStart">TikTok</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <form>
            <input type="email" placeholder="Votre email" className="p-2 w-full mb-4 border rounded" />
            <button type="submit" className="w-full p-2 bg-primary text-black rounded hover:bg-gradientStart hover:text-white">S'inscrire</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <GoogleMap lat={mapCoordinates.lat} lng={mapCoordinates.lng} apiKey={googleApiKey} />
      </div>
      <div className="text-center mt-8">
        <p>© Mon Comptoir Secret. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
