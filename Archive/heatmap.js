var myMap = L.map("map", {
  center: [41.8781, -87.6298],
  zoom: 13
});

var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
// });

// var baseMaps = {
//   "Street Map": streetmap,
//   "Dark Map": darkmap
// };

// L.control.layers(baseMaps, {
//   collapsed: false
// }).addTo(myMap);


d3.csv("Resources/chicago_pins.csv").then(function(data) {
  for(var i=0; i < data.length;i++) {
    var places = data[i];
    console.log(places.latitude)
    L.marker([places.latitude,places.longitude])
      .bindPopup(places.name)
      .addTo(myMap)
  };
});


d3.csv("Resources/chicago_pins.csv").then(function(data) {
  
  var heatArray_chi = [];
  
  for(var i=0; i < data.length;i++) {
    var places = data[i];

    if (places) {
      heatArray_chi.push([places.latitude,places.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray_chi, {
    radius: 60,
    blur: 35
  }).addTo(myMap);

});