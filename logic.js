var myMap = L.map("map", {
  center: [41.8781, -87.6298],
  zoom: 13
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// d3.csv("Resources/chicago_clean.csv", function(chicagoData) {console.log(chicagoData)});
// d3.csv("Resources/seattle_clean.csv", function(seattleData) {console.log(seattleData)});
// d3.csv("Resources/nyc_clean.csv", function(nycData) {console.log(nycData)});
