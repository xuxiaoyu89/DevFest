'use strict';

/* App Module */

var geoHunterApp = angular.module('geoHunterApp', [
    'ngRoute',
    'geoHunterControllers'
]);

geoHunterApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).
        when('/options/:lng/:lat', {
            templateUrl: 'partials/options.html',
            controller: 'OptionsCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

var geoHunterControllers = angular.module('geoHunterControllers', []);