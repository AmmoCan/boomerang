'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'ngAnimate',
  'ngAria',
  'myApp.view1',
  'myApp.version'
])
  .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function ($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
    //Color Theme
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('light-blue');
}]);
