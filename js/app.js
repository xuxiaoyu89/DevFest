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
            templateUrl: 'partials/search.html',
            controller: 'SearchCtrl'
        }).
        when('/search/:lng/:lat', {
            templateUrl: 'partials/show_pics.html',
            controller: 'ShowPicsCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
