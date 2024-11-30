
const map = L.map('map').setView([37.7749, -122.4194], 13); // Example: San Francisco

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup('San Francisco')
    .openPopup();
