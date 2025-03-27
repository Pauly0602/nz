/*
Skript für Neuseelandreise 
*/
// Karte initialisieren
let lat = -41.293056
let lng = 174.001944
let zoom = 11

let map = L.map('map').setView([lat, lng], zoom);
// Hintergrund definieren 
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map)

// Popup definieren und öffnen

marker.bindPopup(`<b>Welcome to Picton!</b>
  <br> 
  In the Marlborough Region of New Zealand's South Island
  `).openPopup();
