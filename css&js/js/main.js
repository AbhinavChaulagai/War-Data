// Initialize the map
var map = L.map('map').setView([30, 35], 3);  // Center map around the Middle East/Europe region

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// War death data for Ukraine, Israel, Palestine, and Russia
var locations = [
  { "lat": 48.3794, "lon": 31.1656, "value": 50000, "place": "Ukraine" },    // Ukraine
  { "lat": 31.0461, "lon": 34.8516, "value": 5000, "place": "Israel" },      // Israel
  { "lat": 31.9522, "lon": 35.2332, "value": 7000, "place": "Palestine" },   // Palestine
  { "lat": 55.7558, "lon": 37.6173, "value": 20000, "place": "Russia" }      // Russia
];

// Add circles to the map for each location
locations.forEach(function(location) {
  L.circle([location.lat, location.lon], {
    color: 'red',
    radius: location.value * 10  // Adjust size according to value
  }).addTo(map)
  .bindPopup(location.place + ": " + location.value + " deaths");
});

// Trend chart for war deaths using Chart.js
var ctx = document.getElementById('trendChart').getContext('2d');
var trendChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Months
    datasets: [{
      label: 'War Deaths Trend',
      data: [10000, 20000, 30000, 40000, 45000, 50000],  // Example data for Ukraine
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    }
  }
});
