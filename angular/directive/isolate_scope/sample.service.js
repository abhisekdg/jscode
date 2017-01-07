angular.module('myApp').service('MyService',function($q){

	this.getData = function(){
		console.log($q);
		var def = $q.defer();
		console.log(def);
		var data  = {'a':2};
		def.resolve(data);
		return def.promise;
	};

});