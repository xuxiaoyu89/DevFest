geoHunterControllers.controller('PlayCtrl',
  function($sce, $rootScope, $scope, $document, $routeParams, $log, $window) {
    
    //Define all non-local variables here
    var longitude, latitude, place_url;
    var homepage = "http://xuxiaoyu89.github.io/DevFest/";
    
    //Define functions
    function getLocalVars() {
      longitude = JSON.parse($window.localStorage.getItem("lng"));
      latitude = JSON.parse($window.localStorage.getItem("lat"));
      place_url = JSON.parse($window.localStorage.getItem("place_url"));
      $log.info(longitude);
      $log.info(latitude);
      $log.info(place_url);
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
    
    //Run functions
    getLocalVars();
    detectBadRedirect();
    
    
});
