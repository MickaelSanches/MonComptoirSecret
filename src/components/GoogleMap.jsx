const GoogleMap = ({ lat, lng, apiKey }) => {
    return (
    <div className="mt-4 mx-auto hidden xs:block" >
        <iframe
        width="500px"
        height="100px"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=18`}
        allowFullScreen
        ></iframe>
    </div>
    );
};

export default GoogleMap;
