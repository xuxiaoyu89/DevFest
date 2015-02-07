geoHunterControllers.controller('PlayCtrl',
  function($sce, $rootScope, $scope, $document, $routeParams, $log, $window) {
    
    /** Define all non-local variables here **/
    var longitude, latitude, place_url;
    var geoposition, geolat, geolng;
    var homepage = "http://xuxiaoyu89.github.io/DevFest/";
    var nextpage = "http://xuxiaoyu89.github.io/DevFest/#/confirm";
    var correct = false;
    $scope.placeImage;
    
    /** Define functions **/
    function getLocalVars() {
      longitude = JSON.parse($window.localStorage.getItem("lng"));
      latitude = JSON.parse($window.localStorage.getItem("lat"));
      place_url = JSON.parse($window.localStorage.getItem("place_url"));
      $log.info("longitude", longitude);
      $log.info("latitude", latitude);
      $log.info("place_url", place_url);
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
    function loadPlaceImage() {
      if (place_url === null) {
        place_url = "http://placehold.it/500x300";
      }
      $log.info("place_url", place_url);
      $scope.placeImage = place_url;
    }
    function getUserLocation() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          geoposition = position;
          geolng = position.coords.longitude;
          geolat = position.coords.latitude;
          
          getLocalVars();
          $log.info([geoposition, longitude, latitude]);
          detectBadRedirect();
          if (correct) {
            $scope.responseText = "Congratulations! You made it!"
          } else {
            $scope.responseText = "Sorry! This isn't the right place. :("
          }
        })
      } else {
        // Browser doesn't support Geolocation
        $scope.responseText = "Can't determine your location! :("
      }
    }
    function compareLocations() {
      if (geolat>(latitude-0.0004502) && geolat<(latitude+0.0004502)) {
        if (geolng>(longitude-0.00059249) && geolng<(longitude+0.00059249)) {
          correct = true;
        }
      }
      correct = false;
    }
    function clearLocalStorage() {
      $window.localStorage.removeItem("lng");
      $window.localStorage.removeItem("lat");
      $window.localStorage.removeItem("place_url");
    }
    $scope.clickConfirm = function() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          geoposition = position;
          geolng = position.coords.longitude;
          geolat = position.coords.latitude;
          
          compareLocations();
          clearLocalStorage();
          if (correct) {
            $window.localStorage.setItem("correct", angular.toJson(true));
          } else {
            $window.localStorage.setItem("correct", angular.toJson(false));
          }
        })
      } else {
        // Browser doesn't support Geolocation
        $window.alert("Can't determine your location! :(");
      }
    }
    $scope.clickQuit = function() {
      $window.localStorage.setItem("lng", angular.toJson(null));
      $window.localStorage.setItem("lat", angular.toJson(null));
      $window.localStorage.setItem("place_url", angular.toJson(null));
      $window.location.href = homepage;
    }
    
    
    /** Run functions **/
    getLocalVars();
    //detectBadRedirect();
    loadPlaceImage();
    
});
