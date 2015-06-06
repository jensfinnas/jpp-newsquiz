app.factory('Questions', ['$http', function($http){
	var service = {};
	service.get = function(quizName) {
		var url = '/quizes/' + quizName + '/questions.json';
		return $http.get(url).success(function(response){
			return response.data;
		}).error(function() {
			console.log("error")
		});	
	};

	return service;
}]);
