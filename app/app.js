// Declare app level module which depends on views, and core components
angular.module('boomerang', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'ngAnimate',
  'ngAria',
  'view1',
  'boomerang.version'
])
  .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function ($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: 'view1'});
    //Color Theme
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('light-blue');
}]);
