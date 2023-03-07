import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Contact() {

  const containerStyle = {
    width: '700px',
    height: '700px'
  };
  
  const center = {
    lat: 49.81673,
    lng: 23.97414
  };
  
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
 
  return (
    

    <LoadScript
      googleMapsApiKey="AIzaSyBBflJ1A_NCnKcmEWf1z7xkU2LGA0-QcYk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        visible={true}
      >
        <Marker onLoad={onLoad} position={center}  />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Contact);
