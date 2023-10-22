import React, { useEffect, useState } from 'react';

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className='w-100 h-100 mt-5 mb-5 bg-white'>
      {latitude && longitude ? (
        <div>
          Latitude: {latitude} <br />
          Longitude: {longitude}
        </div>
      ) : (
        <div>{error ? `Error: ${error}` : 'Loading location...'}</div>
      )}
    </div>
  );
};

export default Location;
