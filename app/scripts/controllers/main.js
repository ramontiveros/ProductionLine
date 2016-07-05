'use strict';

/**
 * @ngdoc function
 * @name productionLineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionLineApp
 */
angular.module('productionLineApp')
  .controller('MainCtrl', function () {
      this.ensambladoras = [
	  new Box({name: "Ensambladora 1", x: 130, y: 120, operator: "Jhon Doe", pieces: 10 }),
	  new Box({name: "Ensambladora 2", x: 133, y: 209, operator: "Jhon Doe", pieces: 0 }),
	  new Box({name: "Calidad", x: 333, y: 159, operator: "Jhon Doe", pieces: 3 })
      ];
  });


