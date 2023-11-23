"use client";
import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GoogleApiKey,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker clickable position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
