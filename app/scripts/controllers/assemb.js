angular.module('productionLineApp').
    controller('AssembCtrl', function (snapshot, fbRef) {
	var self = this;
	self.ensambladoras = [];
	angular.forEach(snapshot.val(),function(data, key){
	    self.ensambladoras.push(new Box(data, key))
	});

	this.add = function() {
	    if (this.ensambladoras == null)
		this.ensambladoras = [];
	    this.ensambladoras.push(new Box({name: "Ensambladora ", x: 0, y: 0}))
	};

	this.save = function(idx){
	    assemb = this.ensambladoras[idx];
	    updates = {};
	    if (assemb.key) {
		updates['/assembs/' + assemb.key] = assemb.getData();
		fbRef.database().ref().update(updates);
		assemb.editing = false;
	    } else {
		newPostKey = fbRef.database().ref().child('assembs').push().key
		updates['/assembs/' + newPostKey] = assemb.getData();
		fbRef.database().ref().update(updates);
		assemb.key = newPostKey;
	    }
	};

	this.remove = function(idx){
	    var assemb = this.ensambladoras[idx];
	    assembRef = fbRef.database().ref().child('assembs/' + assemb.key);
	    assembRef.remove();
	    this.ensambladoras.splice(idx, 1);
	}

	this.update = function(idx) {
	    this.ensambladoras[idx].editing = true;
	}

	this.cancel = function(idx) {
	    this.ensambladoras[idx].editing = false;
	}
    });
