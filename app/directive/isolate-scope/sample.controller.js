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