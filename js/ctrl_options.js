'use strict';

geoHunterControllers.controller('OptionsCtrl', ['$scope', '$document', '$routeParams', '$log', '$window', '$location',
    function($scope, $document, $routeParams, $log, $window, $location) {
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

        $scope.getUrl = function(obj) {
            return "https://maps.googleapis.com/maps/api/streetview?size=300x300&location=" + obj.vicinity + "&fov=90&heading=235&pitch=10&key=AIzaSyDatZNTLLkiqVqtJ9gYulPoaN6SFLpdFYQ";
        };

        $scope.choosePic = function(obj) {
            var loc = obj.geometry.location;

            $window.localStorage.setItem("lng", loc.D);
            $window.localStorage.setItem("lat", loc.k);
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

                console.log(results[1].photos[0].getUrl({
                    maxWidth: 35,
                    maxHeight: 35
                }));

                $scope.results = results;


                $scope.$digest();
            }
        });
    }
]);
