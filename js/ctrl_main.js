geoHunterControllers.controller('MainCtrl', ['$scope', '$log',
    function($scope, $log) {
        $scope.address = "";
        $scope.submit = function(){
            if ($scope.address) {
                $log.info($scope.address);
            }
        }
    }
]);
