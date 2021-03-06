// Add console.log to check to see if our code is working.
console.log("working");

<<<<<<< HEAD
=======
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the polyline.  Create an airline route from SFO to John F. 
// Kennedy International Airport (JFK) with two stops, Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ).
// Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
// bonus add an additional stop
let line = [
  [37.6213, -122.3790],
  [33.5778, -101.8551],
  [30.1899, -97.6686],
  [43.6835, -79.6149],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "mediumBlue",
  dashArray: '4, 4',
  dashOffset: "0",
  weight: 4,
  opacity: 0.5
}).addTo(map);

>>>>>>> 9c647c756be6f4482edcafc7b3736f2d9489e5d0
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Change to dark map.
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Change to dark map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

<<<<<<< HEAD
// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: darkmap
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/shrese/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
      onEachFeature: function(feature, layer) {
          layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
      }
  }).addTo(map);
});
=======
// darkmap.addTo(map);

// streets.addTo(map);

// satellite.addTo(map);

light.addTo(map);
>>>>>>> 9c647c756be6f4482edcafc7b3736f2d9489e5d0
