var map = L.map('map').setView([44.1363, -71.6828], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3NoZWEzIiwiYSI6ImNsMHlxNGw5ZzE4MHUzZXA1bG4yenJ2YnEifQ.DnnfH-DWhWhkLzLsRfDpqg'
}).addTo(map);

map.on('click', function(e) {
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});