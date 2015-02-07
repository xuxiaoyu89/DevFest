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
      longitude = parseFloat(JSON.parse($window.localStorage.getItem("lng")));
      latitude = parseFloat(JSON.parse($window.localStorage.getItem("lat")));
      place_url = JSON.parse($window.localStorage.getItem("place_url"));
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
      $scope.placeImage = place_url;
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
          geolng = parseFloat(position.coords.longitude);
          geolat = parseFloat(position.coords.latitude);
          
          compareLocations();
          clearLocalStorage();
          $window.localStorage.setItem("correct", angular.toJson(correct));
          $window.location.href = nextpage;
        })
      } else {
        // Browser doesn't support Geolocation
        $window.alert("Can't determine your location! :(");
      }
    }
    $scope.clickQuit = function() {
      clearLocalStorage();
      $window.location.href = homepage;
    }
    
    
    /** Run functions **/
    getLocalVars();
    //detectBadRedirect();
    loadPlaceImage();
    
});
