import GoogleMap from '../components/GoogleMap.jsx';
const mapCoordinates = { lat: 45.69775390625, lng: 5.905280113220215 };
const googleApiKey = 'AIzaSyCjon8hxYscGO-uohSaCNNzij7459SmbbU';

const Footer = () => {
    return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
        <p>© Mon Comptoir Secret. Tous droits réservés.</p>
        <a href="/mentions-legales" className="hover:text-gray-300">Mentions légales</a>
        <section>
			<GoogleMap lat={mapCoordinates.lat} lng={mapCoordinates.lng} apiKey={googleApiKey} />
		</section>
    </footer>
    );
};

export default Footer;
