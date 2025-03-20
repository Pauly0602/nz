var map = L.map('map').setView([-41.293056, 174.001944], 11);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-41.293056, 174.001944]).addTo(map);
marker.bindPopup("<b>Welcome to Picton!</b><br> In the Marlborough Region of New Zealand's South Island").openPopup();
