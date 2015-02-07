geoHunterControllers.controller('PlayCtrl', ['$scope', '$window', '$document', '$routeParams', '$log',
  function($scope, $document, $routeParams, $log, $window) {
    
    //Define all non-local variables here
    var longitude, latitude, place_url;
    
    function getLocalVars() {
      longitude = $window.localStorage.getItem("lng");
      latitude = $window.localStorage.getItem("lat");
      place_url = $window.localStorage.getItem("place_url");
      $log.info(longitude);
      $log.info(latitude);
      $log.info(place_url);
    }
    getLocalVars();
    
    
  }
]);
