"use client";
import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const GoogleApiKey = `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
const containerStyle = {
  minWidth: "400px",
  minHeight: "400px",
  width: "100%",
  height: "100%",
};

const center = {
  lat: -34.61985,
  lng: -58.377079,
};

function MyComponent() {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: GoogleApiKey,
  // });

  // const [map, setMap] = useState(null);

  // const onLoad = useCallback((map: any) => {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback((map: any) => {
  //   setMap(null);
  // }, []);

  // return isLoaded ? (
  // <GoogleMap
  //   mapContainerStyle={containerStyle}
  //   center={center}
  //   zoom={15}
  //   onLoad={onLoad}
  // >
  //   {/* Child components, such as markers, info windows, etc. */}
  //   <>
  //     <Marker clickable position={center} />
  //   </>
  // </GoogleMap>
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13133.516052718316!2d-58.3771748!3d-34.6198612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2bdfd3d4fd%3A0xdb5a18ab10165cb1!2sPiedras.1010!5e0!3m2!1sen!2sus!4v1710224506270!5m2!1sen!2sus"
      width="100%"
      height="600px"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  // ) : (
  //   <></>
  // );
}

export default React.memo(MyComponent);
