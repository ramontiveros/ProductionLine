'use strict';

/**
 * @ngdoc function
 * @name productionLineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionLineApp
 */
angular.module('productionLineApp')
  .controller('MainCtrl', function (snapshot, $scope) {
      var self = this;
      self.ensambladoras = [];
      angular.forEach(snapshot.val(),function(data, key){
	  self.ensambladoras.push(new Box(data, key, $scope, snapshot.ref.child(key)))
      });
  });


