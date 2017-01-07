app.directive('myFirstDirective',function(){

	console.log('Initialized myFirstDirective');

	return {
		restrict : 'E',
		scope : {
			'name' : '@dirName',
			'age'  : '='
		},
		templateUrl : "directive/isolate-scope/template.html"
	};

});