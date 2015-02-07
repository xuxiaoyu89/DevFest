'use strict';

/* Controllers */

var geoHunterControllers = angular.module('geoHunterControllers', []);

geoHunterControllers.controller('ShowPicsCtrl', ['$scope', '$document', '$routeParams', '$log',
    function($scope, $document, $routeParams, $log) {
        var map;
        var service;
        var infowindow;

        var lng = $routeParams.lng;
        var lat = $routeParams.lat;

        $log.log("lng: " + lng + ", lat: " + lat);

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

                $scope.results = results;
            }
        });
    }
]);


geoHunterControllers.controller('SearchCtrl', ['$scope',
    function($scope) {

    }
]);
