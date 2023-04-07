import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



function Contact() {
   //перевіряємо розмір вікна
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
     function handleResize() {
       setWindowWidth(window.innerWidth);
     }
 
     window.addEventListener('resize', handleResize);
 
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []); 

   const sizeMap = windowWidth > 720? '700px' : '320px'
   
    const containerStyle = {
  width: sizeMap,
  height: sizeMap
};
  
  const center = {
    lat: 49.81673,
    lng: 23.97414
  };
  
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
 
  return (
    

    <div>
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
  

    </div>
  )
}

export default React.memo(Contact);
