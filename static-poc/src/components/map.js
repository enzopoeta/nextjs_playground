import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import markerIconPng from "/marker-icon.png";
//import { Icon } from "leaflet";

/*[51.505, -0.09]*/

L.Icon.Default.imagePath = "/images/";

/*
import markerIcon from "leaflet/dist/images/marker-icon.png";
L.Marker.prototype.setIcon(
  L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })
);*/

function MyComponent(props) {
  const map = useMap();
  console.log("map center:", map.getCenter());
  map.flyTo([props.coords[0], props.coords[1]], 18);

  return null;
}

function MapComponent(props) {
  var lat = props.lat;
  var lon = props.lon;
  console.log(props);
  return (
    <>
      <MapContainer
        center={[lat, lon]}
        zoom={18}
        scrollWheelZoom={false}
        style={{ height: 400, width: "100%" }}
      >
        <MyComponent coords={[lat, lon]} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lon]}>
          <Popup>{props.message}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default MapComponent;
