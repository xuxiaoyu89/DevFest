'use strict';

geoHunterControllers.controller('OptionsCtrl', ['$scope', '$document', '$routeParams', '$log', '$window', '$location',
    function($scope, $document, $routeParams, $log, $window, $location) {
        var map;
        var service;
        var infowindow;

        var lng = $routeParams.lng;
        var lat = $routeParams.lat;

        console.log("lat: " + lat + ", lng: " + lng);

        var pyrmont = new google.maps.LatLng(lat, lng);

        map = document.getElementById('map');

        var request = {
            location: pyrmont,
            radius: '500',
            types: ['store']
        };

        $scope.getUrl = function(obj) {
            return "https://maps.googleapis.com/maps/api/streetview?size=300x300&location=" + obj.vicinity + "&fov=90&heading=235&pitch=10&key=AIzaSyDatZNTLLkiqVqtJ9gYulPoaN6SFLpdFYQ";
        };

        $scope.choosePic = function(obj) {
            var loc = obj.geometry.location;

            $window.localStorage.setItem("lng", 40.809457);
            $window.localStorage.setItem("lat", -73.961587);
            $window.localStorage.setItem("place_url", JSON.stringify($scope.getUrl(obj)));

            $location.path('/play');
        }

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                // for (var i = 0; i < results.length; i++) {
                //   var place = results[i];
                //   createMarker(results[i]);
                // }

                console.log(results);

                $scope.results = results;


                $scope.$digest();
            }
        });
    }
]);
