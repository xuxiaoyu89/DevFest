geoHunterControllers.controller('ConfirmCtrl',
  function($sce, $rootScope, $scope, $document, $routeParams, $log, $window) {
    
    /** Define all non-local variables here **/
    var longitude, latitude, place_url;
    var homepage = "http://xuxiaoyu89.github.io/DevFest/";
    var geoposition, geolng, geolat;
    $scope.responseText;
    
    /** Define functions **/
    function getLocalVars() {
      longitude = JSON.parse($window.localStorage.getItem("lng"));
      latitude = JSON.parse($window.localStorage.getItem("lat"));
      place_url = JSON.parse($window.localStorage.getItem("place_url"));
      $window.localStorage.setItem("lng", angular.toJson(null));
      $window.localStorage.setItem("lat", angular.toJson(null));
      $window.localStorage.setItem("place_url", angular.toJson(null));
    }
    function detectBadRedirect() {
      var baddata = false;
      if (longitude === null || latitude === null) {
        baddata = true;
      }
      if (place_url === null) {
        baddata = true;
      }
      if (baddata) {
        $window.alert("You seem to have gotten here incorrectly...");
        $window.location.href = homepage;
      }
    }
    function compareLocations() {
      if (geolat>(latitude-0.0004502) && geolat<(latitude+0.0004502)) {
        if (geolng>(longitude-0.00059249) && geolng<(longitude+0.00059249)) {
          return true;
        }
      }
      return false;
    }
    $scope.clickQuit = function() {
      $window.location.href = homepage;
    }
    function getUserLocation() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          geoposition = position;
          geolng = position.coords.longitude;
          geolat = position.coords.latitude;
          
          getLocalVars();
          //detectBadRedirect();
          if (compareLocations()) {
            $scope.responseText = "Congratulations! You made it!"
          }
        })
      } else {
        // Browser doesn't support Geolocation
        $scope.responseText = "Can't determine your location! :("
      }
    }
    
    /** Run functions **/
    getUserLocation();
    
});
