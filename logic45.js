d3.csv("Resources/nyc_pins.csv").then(function(data) {
    
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
    });

    var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
    };

    var markers = [];

    for(var i=0; i < data.length;i++) {
        var clusterplaces = data[i];
        // console.log(clusterplaces);
        var lists = "<dl><dt>Name:</dt>"
        + "<dd>" + clusterplaces.name + "</dd>"
        + "<dt>Price</dt>"
        + "<dd>" + "$" + clusterplaces.price + "</dd>"
        + "<dt>Minimum Nights</dt>"
        +"<dd>"+ clusterplaces.minimum_nights + "</dd>"
        var clustermarker = L.marker([clusterplaces.latitude,clusterplaces.longitude])
        .bindPopup(lists);

        markers.push(clustermarker);
    };

    console.log(markers);

    let clusters = L.layerGroup(markers);

    var heatArray_chi = [];

    for(var i=0; i < data.length;i++) {
        var places = data[i];

        if (places) {
        heatArray_chi.push([places.latitude,places.longitude]);
        }
    };

    var heat = L.heatLayer(heatArray_chi, {
        radius: 70,
        blur: 35
    });

    var overlayMaps = {
        Clusters: clusters,
        Heatmap: heat
        };

    var myMap = L.map("map", {
        center: [41.8781, -87.6298],
        zoom: 13,
        layers: [streetmap, clusters]
        });

    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
        }).addTo(myMap);
    
});
    