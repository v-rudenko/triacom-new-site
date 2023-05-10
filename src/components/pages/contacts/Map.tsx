import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api";

// type Props = {}

const CENTER: google.maps.LatLngLiteral = {
  lat: 50.484897614205785,
  lng:  30.480280210641748,
};

const Map = () => {
  const API_KEY: string = import.meta.env.VITE_MAPS_API_KEY;

  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={17}
      center={CENTER}
      mapContainerClassName="map-container"
    ><MarkerF position={CENTER} /></GoogleMap>
  );
};

export default Map;
