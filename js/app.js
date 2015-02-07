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
        when('/options/:lat/:lng', {
            templateUrl: 'partials/options.html',
            controller: 'OptionsCtrl'
        }).
        when('/play', {
            templateUrl: 'partials/play.html',
            controller: 'PlayCtrl'
        }).
        when('/confirm', {
            templateUrl: 'partials/confirm.html',
            controller: 'ConfirmCtrl'
        }).
        when('/temp', {
            templateUrl: 'partials/temp.html',
            controller: 'TempCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

var geoHunterControllers = angular.module('geoHunterControllers', []);
