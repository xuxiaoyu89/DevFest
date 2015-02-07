'use strict';


geoHunterControllers.controller('OptionsCtrl', ['$scope', '$document', '$routeParams',
    function($scope, $document, $routeParams) {
        var map;
        var service;
        var infowindow;

        var lng = $routeParams.lng;
        var lat = $routeParams.lat;

        console.log("lng: " + lng + ", lat: " + lat);

        var pyrmont = new google.maps.LatLng(lng, lat);

        map = document.getElementById('map');

        var request = {
            location: pyrmont,
            radius: '500',
            types: ['store']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                // for (var i = 0; i < results.length; i++) {
                //   var place = results[i];
                //   createMarker(results[i]);
                // }

                console.log("A!")

                $scope.results = results;
                $scope.$digest();
            }
        });
    }
]);



