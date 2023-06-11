var mapOptions = {
    center: [30.058867, 31.221441],
    zoom: 14
    }
    
    // Creating a map object
    var map = new L.map("my_map_1", mapOptions);
    var marker = L.marker([30.058867, 31.221441]).addTo(map);
    var marker_2 = L.marker([30.062006, 31.220250]).addTo(map);
    // Creating a Layer object
    var layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{

    });
    
    // Adding layer to the map
    map.addLayer(layer);