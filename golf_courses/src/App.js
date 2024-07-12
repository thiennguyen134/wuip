import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/golf_courses.json")
      .then(response => {
        setCourses(response.data.courses);
        console.log('Axios request succeeded!');
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const position = [62, 26];
  const zoom = 7;

  const markers = courses.map((course, index) => (
    <Marker position={[course.lat, course.lng]} key={index} icon={DefaultIcon}>
      <Popup>
        <b>{course.course}</b>
        <br />
        {course.address}
        <br />
        {course.phone}
        <br />
        {course.email}
        <br />
        <a href={course.web} target="_blank" rel="noopener noreferrer">
          {course.web}
        </a>
        <br />
        <br />
        <i>{course.text}</i>
      </Popup>
    </Marker>
  ));

  return (
    <div className="App">
      <MapContainer center={position} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  );
}

export default App;
