var config = {
    apiKey: "AIzaSyA8l7rx-vsaCLnewEDwdePnEFO4BGAvSws",
    authDomain: "project-9065448558614321644.firebaseapp.com",
    databaseURL: "https://project-9065448558614321644.firebaseio.com",
    storageBucket: "project-9065448558614321644.appspot.com",
};

var Box = function(data, key){
    this.key = key;
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
    this.isEditable = function(){return this.key == undefined || this.editing};
    this.getData = function(){ return {name: this.name, x: this.x, y: this.y}; }
};

angular.module('productionLineApp').
    service("fbRef",function(){
	return firebase.initializeApp(config);
    }).
    service("fbAuth",function($q, fbRef){
	var auth;
	return function () {
	    if (auth) return $q.when(auth);
	    var authObj = fbRef.auth();
	    if (authObj.currentUser) {
		return $q.when(auth = authObj.currentUser);
	    }
	    var deferred = $q.defer();
	    authObj.signInAnonymously().then(function(authData) {
		auth = authData;
		deferred.resolve(authData);
	    });
	    return deferred.promise;
	}
    }).
    service("Assemb", function($q, fbRef, fbAuth){
	var self = this;
	this.fetch = function(){
	    if (this.items) return $q.when(this.items);
	    return fbAuth().then(function(auth) {
		var deferred = $q.defer();
		var ref = fbRef.database().ref('assembs');
		ref.on('value', function(snapshot) {
		    self.ens = [];
		    angular.forEach(snapshot.val(),function(data, key){
			self.ens.push(new Box(data, key))
		    });		    
		    deferred.resolve(self.ens);
		});
		return deferred.promise;
	    });
	}
    });
