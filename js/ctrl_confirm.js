geoHunterControllers.controller('ConfirmCtrl',
  function($sce, $rootScope, $scope, $document, $routeParams, $log, $window) {
    
    /** Define all non-local variables here **/
    var longitude, latitude, place_url;
    var homepage = "http://xuxiaoyu89.github.io/DevFest/";
    var geoposition, geolng, geolat;
    var correct;
    $scope.responseText;
    
    /** Define functions **/
    function getLocalVars() {
      correct = JSON.parse($window.localStorage.getItem("correct"));
      $window.localStorage.removeItem("correct");
    }
    function detectBadRedirect() {
      var baddata = false;
      if (correct === null || correct === undefined) {
        baddata = true;
      }
      if (baddata) {
        $scope.responseText = "You seem to have gotten here incorrectly...";
        //$window.alert("You seem to have gotten here incorrectly...");
        //$window.location.href = homepage;
      }
    }
    function determineResponse() {
      if (correct === null || correct === undefined) {
        $scope.responseText = "You seem to have gotten here incorrectly...";
      } else if (correct) {
        $scope.responseText = "Congratulations! You made it!"
      } else {
        $scope.responseText = "Sorry! You aren't there yet."
      }
    }
    $scope.clickQuit = function() {
      $window.location.href = homepage;
    }

    /** Run functions **/
    getLocalVars();
    detectBadRedirect();
    determineResponse();
    
});
