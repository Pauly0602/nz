/*
Skript für Neuseelandreise 
*/
// Karte initialisieren
let lat = -41.29
let lng = 174.0
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

marker.bindPopup(`<h2> Picton </h2>
<ul>
  <li> Geograph. Br.: ${lat}°</li>
  <li> Geograph. Länge: ${lng}°</li>
</ul>
  In the Marlborough Region of New Zealand's South Island. ${lat}/${lng}.
  `).openPopup();
  