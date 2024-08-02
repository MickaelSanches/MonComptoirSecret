const GoogleMap = ({ lat, lng, apiKey }) => {
    return (
        <div className="map-container mt-4 mx-auto">
            <iframe
                width="100%"
                height="300px"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=18`}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default GoogleMap;
