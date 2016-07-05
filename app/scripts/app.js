'use strict';

/**
 * @ngdoc overview
 * @name productionLineApp
 * @description
 * # productionLineApp
 *
 * Main module of the application.
 */
angular
  .module('productionLineApp', [
      'ngRoute',
      'ngTouch',
      'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
	resolve: { snapshot: function(Assemb) { return Assemb.fetch(); } }
      })
      .when('/operator', {
        templateUrl: 'views/operator.html',
        controller: 'OperatorCtrl',
        controllerAs: 'operator'
      })
      .when('/assemb', {
        templateUrl: 'views/assemb.html',
        controller: 'AssembCtrl',
        controllerAs: 'assembs',
	resolve: { snapshot: function(Assemb) { return Assemb.fetch(); } }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
