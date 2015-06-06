'use strict';

/**
 * @ngdoc function
 * @name newsquizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsquizApp
 */
angular.module('newsquizApp')
  .controller('QuizCtrl', function ($scope, $routeParams,$timeout, $filter, Questions) {
    var settings = {
    	secondsPerQuestion: 3,
    	numberOfLifes: 3 
    }
    var questions = [];
    $scope.quizName = $routeParams.name;
    $scope.currentQuestionIndex = 0;

    Questions.get($routeParams.name).then(function(resp) {
    	resetCounter();
    	questions = resp.data;
    })

    $scope.$watch('currentQuestionIndex', function(newVal) {
    	if (questions.length > 0) {
    		$scope.currentQuestion = questions[$scope.currentQuestionIndex];
    		
    		// If last question
    		if ($scope.currentQuestionIndex == questions.length) {
    			finish();
    		}
    	}

    });

    var resetCounter = function() {
	    $scope.currentTime = settings.secondsPerQuestion * 10;
    }
    $scope.onTimeout = function(){
        $scope.currentTime--;
        if ($scope.currentTime < 0) {
        	resetCounter();
    		questions[$scope.currentQuestionIndex].status = 'unanswered';
    		$scope.currentQuestionIndex++;
        	$scope.lifesLeft--;
        }
        timer = $timeout($scope.onTimeout,100);
    }
    var timer = $timeout($scope.onTimeout,100);

    $scope.lifesLeft = settings.numberOfLifes;
    $scope.getPoints = function() {
    	return  $filter('filter')(questions, {'status': 'correct'}).length;
    };

    
    $scope.$watch('lifesLeft', function(newVal) {
    	if (newVal == 0) {
    		finish();
    	}
    })
    

    $scope.answer = function(answer) {
    	// Correct answer
    	if (answer == $scope.currentQuestion.correctAnswer) {
    		questions[$scope.currentQuestionIndex].status = 'correct';
    	}
    	// Wrong answer
    	else {
    		questions[$scope.currentQuestionIndex].status = 'false';
    	}
    	$scope.currentQuestionIndex = $scope.currentQuestionIndex + 1;
    	resetCounter();
    }

    var finish = function() {
    	$scope.showResults = true;
    	$timeout.cancel(timer);
    }

  });
