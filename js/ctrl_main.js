geoHunterControllers.controller('MainCtrl', ['$scope', '$log', '$http', '$location',
    function($scope, $log, $http, $location) {
        $scope.long = -73.9615376;
        $scope.lat = 40.80942609;
        $scope.address = "";
        var map;
        function initialize() {
            $log.info("in initialize");
                var mapOptions = {
                    zoom: 14
                };
            map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
        // Try HTML5 geolocation
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = new google.maps.LatLng(position.coords.latitude,
                                               position.coords.longitude);
                    console.log("position", position.coords.latitude, position.coords.longitude);
                    $scope.long = position.coords.longitude;
                    $scope.lat = position.coords.latitude;
                    var infowindow = new google.maps.InfoWindow({
                        map: map,
                        position: pos,
                        content: 'Location found using HTML5.'
                    });
                    map.setCenter(pos);
                }, function() {
                    handleNoGeolocation(true);
                });
            } else {
                // Browser doesn't support Geolocation
                handleNoGeolocation(false);
            }
        }
        function handleNoGeolocation(errorFlag) {
            if (errorFlag) {
                var content = 'Error: The Geolocation service failed.';
            } else {
                var content = 'Error: Your browser doesn\'t support geolocation.';
            }
            var options = {
                map: map,
                position: new google.maps.LatLng(60, 105),
                content: content
            };
            var infowindow = new google.maps.InfoWindow(options);
            map.setCenter(options.position);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        
        $scope.submit = function(){
            
            if ($scope.address) {
                $log.info($scope.address);
                
                //  "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY"
                var key = "&key=AIzaSyCdEJQfa3i2ul0Ji3p4xFuc9DNA1KY4HNw";
                var address = $scope.address.replace(/ /g, "+");
                $log.info("address: ", address);
                var geo_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + key;
                $log.info("url: ", geo_url);
                $http.get(geo_url).
                success(function(data, status, headers, config){
                    $log.info(data);
                    $scope.long = data.results[0].geometry.location.lng;
                    $scope.lat = data.results[0].geometry.location.lat;
                    $log.info("lat, long: ", $scope.long, $scope.lat);
                    $location.path("/options/" + $scope.lat+ "/" + $scope.long);
                }).
                error(function(data, status, headers, config){
                    $log.info(status);
                });
            }
            else{
                 $location.path("/options/" + $scope.lat + "/" + $scope.long);
            }
        }
    }
]);
