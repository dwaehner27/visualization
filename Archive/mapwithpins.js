var myMap = L.map("map", {
    center: [41.8781, -87.6298],
    zoom: 5
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  var layers = {
    CPINS: new L.LayerGroup(),
    NPINS: new L.LayerGroup(),
    SPINs: new L.LayerGroup()
  };
  
  

d3.csv("Resources/chicago_pins.csv").then(function(c){
    for (var i = 0; i < c.length; i++){
        var places = c[i];
        var list = "<dl><dt>Name:</dt>"
           + "<dd>" + places.name + "</dd>"
           + "<dt>Price</dt>"
           + "<dd>" + "$" + places.price + "</dd>"
           + "<dt>Minimum Nights</dt>"
           +"<dd>"+ places.minimum_nights + "</dd>"
        // console.log(places)};
        // console.log(places.latitude)};
        L.marker([places.latitude, places.longitude])
        .bindPopup(list)
        .addTo(myMap)};

});
d3.csv("Resources/nyc_pins.csv").then(function(n){
    for (var i = 0; i < n.length; i++){
      var york = n[i];
      var lists = "<dl><dt>Name:</dt>"
      + "<dd>" + york.name + "</dd>"
      + "<dt>Price</dt>"
      + "<dd>" + "$" + york.price + "</dd>"
      + "<dt>Minimum Nights</dt>"
      +"<dd>"+ york.minimum_nights + "</dd>"
      // console.log(york)};
      // console.log(york.latitude)};
      L.marker([york.latitude, york.longitude])
      .bindPopup(lists)
      .addTo(myMap)};
});
d3.csv("Resources/seattle_pins.csv").then(function(s){
    for (var i = 0; i < s.length; i++){
      var sea = s[i];
      var lis = "<dl><dt>Name:</dt>"
      + "<dd>" + sea.name + "</dd>"
      + "<dt>Price</dt>"
      + "<dd>" + "$" + sea.price + "</dd>"
      + "<dt>Minimum Nights</dt>"
      +"<dd>"+ sea.minimum_nights + "</dd>"
      // console.log(sea)};
      // console.log(sea.latitude)};
      L.marker([sea.latitude, sea.longitude])
      .bindPopup(lis)
      .addTo(myMap)};
 });

