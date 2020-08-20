var mymap = L.map('mapid',  {crs: L.CRS.Simple});
var bounds = [[0,0], [900,1150]];
var image = L.imageOverlay('./images/ravengard_map.jpg', bounds).addTo(mymap);
var yx = L.latLng;

var xy = function(x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
};
var baggister = xy(730.0, 165.0);
var valtorek  = xy(795.0, 285.0);
var beachfort = xy(745.0, 405.0);
var lise      = xy(705.0, 435.0);
var fallia    = xy(620.0, 480.0);
var vaela     = xy(545.0, 515.0);
var sunia     = xy(645.0, 550.0);
var brinhd    = xy(605.0, 605.0);
var frostgate = xy(555.0, 642.0);
var sanctuaryofeternallight = xy(530.0, 710.0);

L.marker(baggister).addTo(mymap).bindPopup('Baggister');
L.marker( valtorek).addTo(mymap).bindPopup('Val Torek');
L.marker(beachfort).addTo(mymap).bindPopup('Beachfort');
L.marker(     lise).addTo(mymap).bindPopup(     'Lise');
L.marker(   fallia).addTo(mymap).bindPopup(   'Fallia');
L.marker(    vaela).addTo(mymap).bindPopup(    'Vaela');
L.marker(    sunia).addTo(mymap).bindPopup(    'Sunia');
L.marker(   brinhd).addTo(mymap).bindPopup(   'Brinhd');
L.marker(frostgate).addTo(mymap).bindPopup('Frostgate');
L.marker(sanctuaryofeternallight).addTo(mymap).bindPopup('Sanctuary of Eternal Light');

// var travel = L.polyline([sol, deneb]).addTo(mymap);

//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiYXVzdGlud2F5bWFuIiwiYSI6ImNrZTMxMGQwZDBlajAzMXA4bmJ5Z3lnemsifQ.KfmzttIrOlP9mxjUEsp1Mw'
// }).addTo(mymap);

mymap.fitBounds(bounds);