geoHunterControllers.controller('PlayCtrl', ['$scope', '$window', '$document', '$routeParams', '$log',
  function($scope, $document, $routeParams, $log, $window) {
    
    //Define all non-local variables here
    var longitude, latitude, place_url;
    
    function getLocalVars() {
      $log.info($window.localStorage);
      //longitude = JSON.parse($window.localStorage.getItem("lng"));
      //latitude = JSON.parse($window.localStorage.getItem("lat"));
      //place_url = JSON.parse($window.localStorage.getItem("place_url"));
      $log.info(longitude);
      $log.info(latitude);
      $log.info(place_url);
    }
    getLocalVars();
    
    
  }
]);
