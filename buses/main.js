(function () {
    //create map in leaflet and tie it to the div called 'theMap'
    var map = L.map('theMap').setView([44.650627, -63.59714], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var geoJsonLayer = L.geoJSON(null).addTo(map);

    function fetchData() {
        fetch(`https://hrmbusapi.herokuapp.com/`)
            .then((response) => response.json())
            .then((json) => {
                // fetch and retrieve geoJson data
                const geojson = json.entity
                    .map((bus) => {
                        return [bus.vehicle.position, bus.vehicle.trip, bus.id];
                    })
                    .map((value) => {
                        return {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [
                                    value[0].longitude,
                                    value[0].latitude,
                                ],
                            },
                            properties: {
                                bearing: value[0].bearing,
                                busNumber: value[2],
                                routeId: value[1].routeId,
                                popupStr: `Route ID: ${value[1].routeId} / Bus Number: ${value[2]}`,
                            },
                        };
                    });

                var busIcon = L.icon({
                    iconUrl: 'bus.png',
                    iconSize: [30, 30],
                });

                var featureCollection = {
                    type: 'FeatureCollection',
                    features: geojson,
                };

                geoJsonLayer = L.geoJSON(featureCollection, {
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, {
                            icon: busIcon,
                            rotationAngle: feature.properties.bearing,
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup(feature.properties.popupStr);
                    },
                }).addTo(map);

                // console.log(featureCollection);
            });
        geoJsonLayer.clearLayers();
        setTimeout(fetchData, 7000);
    }
    fetchData();
})();
