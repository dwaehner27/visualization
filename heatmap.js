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
  
  d3.csv("Resources/chicago_clean.csv").then(function(data) {
    for(var i=0; i < 1000;i++) {
      var places = data[i];
      console.log(places.latitude)
      L.marker([places.latitude,places.longitude])
        .bindPopup(places.name)
        .addTo(myMap)
    };
  });

  d3.csv("Resources/nyc_clean.csv").then(function(data) {
    
    var heatArray_nyc = [];
    
    for(var i=0; i < data.length;i++) {
      var places = data[i];

      if (places) {
        heatArray_nyc.push([places.latitude,places.longitude]);
      }
    }

    var heat = L.heatLayer(heatArray_nyc, {
      radius: 20,
      blur:35
    }).addTo(myMap);

  });

  d3.csv("Resources/seattle_clean.csv").then(function(data) {
    
    var heatArray_seattle = [];
    
    for(var i=0; i < data.length;i++) {
      var places = data[i];

      if (places) {
        heatArray_seattle.push([places.latitude,places.longitude]);
      }
    }

    var heat = L.heatLayer(heatArray_seattle, {
      radius: 30,
      blur:35
    }).addTo(myMap);

  });

  d3.csv("Resources/chicago_clean.csv").then(function(data) {
    
    var heatArray_chi = [];
    
    for(var i=0; i < data.length;i++) {
      var places = data[i];

      if (places) {
        heatArray_chi.push([places.latitude,places.longitude]);
      }
    }

    var heat = L.heatLayer(heatArray_chi, {
      radius: 25,
      blur: 35
    }).addTo(myMap);

  });