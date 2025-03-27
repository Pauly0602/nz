/*
Skript für Neuseelandreise 
*/
// Karte initialisieren
let map = L.map('map').setView([-41.293056, 174.001944], 11);
// Hintergrund definieren 
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Marker zeichnen
let marker = L.marker([-41.293056, 174.001944]).addTo(map);
// Popup definieren und öffnen
marker.bindPopup("<b>Welcome to Picton!</b><br> In the Marlborough Region of New Zealand's South Island").openPopup();
