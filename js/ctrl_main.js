geoHunterControllers.controller('MainCtrl', ['$scope', '$log', '$http',
    function($scope, $log, $http) {
        $scope.long = 0.0;
        $scope.lat = 0.0;
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
                if ($scope.address === ""){
                    
                }
                else{
                    //  "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY"
                    var key = "AIzaSyCdEJQfa3i2ul0Ji3p4xFuc9DNA1KY4HNw";
                    var address = $scope.address;
                    for (i=0; i<address.length; i++){
                        if(address[i] === " "){
                            address[i] = "+";
                        }
                    }
                    $log.info("address: ", address);
                    var geo_url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY" 
                }
            }
        }
    }
]);
