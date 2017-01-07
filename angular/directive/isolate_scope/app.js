var app = angular.module('myApp',[]);

app.controller('MyControllerOne',function($scope,MyService){

	console.log('Initialized MyControllerOne');
	
	$scope.clickPressed = function(){
		MyService.getData()
    	.then(function(resp) {   		
        	console.log('resp returned from service.',resp);
      		$scope.name = 'Abhisek';
    	});
	};
	
});

app.directive('myFirstDirective',function(){

	console.log('Initialized myFirstDirective');

	return {
		restrict : 'E',
		scope : {
			'name' : '@dirName',
			'age'  : '='
		},
		templateUrl : "sample.directive.html"
	};

});