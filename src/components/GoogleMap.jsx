const GoogleMap = ({ lat, lng, apiKey }) => {
    return (
    <div className="mt-4 mx-auto" >
        <iframe
        width="20%"
        height="250"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=18`}
        allowFullScreen
        ></iframe>
    </div>
    );
};

export default GoogleMap;
