'use strict';

/**
 * @ngdoc function
 * @name productionLineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionLineApp
 */
var Box = function(data){
    this.name = data.name;
    this.x = data.x;
    this.y = data.y;
    this.operator = data.operator;
    this.pieces = data.pieces;
    this.w = 138;
    this.h = 60;
    
    this.xt = function() {return this.x + 69;}
    this.yt = function() {return this.y + 15;}
    this.xl1 = function() {return this.x;}
    this.yl1 = function() {return this.y + 20;}
    this.xl2 = function() {return this.x + this.w;}
    this.yl2 = function() {return this.y + 20;}
    this.xo = function(){ return this.xt() - 60;}
    this.yo = function(){ return this.yt() + 20;}
    this.xp = function(){ return this.xt() - 60;}
    this.yp = function(){ return this.yo() + 10;}
    this.color = function(){return this.pieces > 0 ? "fill: #00ff00" : "fill: #ff0000";}
};

angular.module('productionLineApp')
  .controller('MainCtrl', function () {
      this.ensambladoras = [
	  new Box({name: "Ensambladora 1", x: 130, y: 120, operator: "Jhon Doe", pieces: 10 }),
	  new Box({name: "Ensambladora 2", x: 133, y: 209, operator: "Jhon Doe", pieces: 0 }),
	  new Box({name: "Calidad", x: 333, y: 159, operator: "Jhon Doe", pieces: 3 })
      ];
  });


