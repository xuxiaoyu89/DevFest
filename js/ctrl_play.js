geoHunterControllers.controller('PlayCtrl',
  function($sce, $rootScope, $scope, $document, $routeParams, $log, $window) {
    
    /** Define all non-local variables here **/
    var longitude, latitude, place_url;
    var homepage = "http://xuxiaoyu89.github.io/DevFest/";
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
    function loadImage() {
      if (place_url === null) {
        place_url = "http://placehold.it/350x150";
      }
      $scope.placeImage = place_url;
    }
    var _img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
    
    /** Run functions **/
    getLocalVars();
    //detectBadRedirect();
    
    
});
