import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import data from '../utils/data.json';

const latitude = data[0].latitude;
const longitude = data[0].longitude;

const containerStyle = {
  width: '400px',
  height: '400px'
};
// lat: -3.745,lng: -38.523
const center = {
  lat: latitude,
  lng: longitude
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBKHAQbo2RGG9JP5atgCvPX8AflO_wi8-Q"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)