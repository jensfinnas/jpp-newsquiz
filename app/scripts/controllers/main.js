'use strict';

/**
 * @ngdoc function
 * @name newsquizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsquizApp
 */
angular.module('newsquizApp')
  .controller('MainCtrl', function ($scope) {
    var settings = {
    	secondsPerQuestion: 5,
    	numberOfLifes: 3 
    }
    var questions = [
        {
            question: 'Is 1+1=2?',
            correctAnswer: 'yes',

        },
        {
            question: 'Is 2+2=5?',
            correctAnswer: 'no'

        },
        {
            question: 'Is 2+6=8?',
            correctAnswer: 'yes'

        }
    ]

    $scope.lifesLeft = settings.numberOfLifes;
    $scope.points = 0;

    $scope.currentQuestionIndex = 0;
    $scope.$watch('currentQuestionIndex', function(newVal) {
    	$scope.currentQuestion = questions[$scope.currentQuestionIndex];
    	
    	// If last question
    	if ($scope.currentQuestionIndex == questions.length) {
    		$scope.showResults = true;
    	}
    })
    
    

    $scope.answer = function(answer) {
    	// Correct answer
    	if (answer == $scope.currentQuestion.correctAnswer) {
    		$scope.points = $scope.points + 1;
    	}
    	// Wrong answer
    	else {
    		$scope.lifesLeft = $scope.lifesLeft - 1;
    	}
    	$scope.currentQuestionIndex = $scope.currentQuestionIndex + 1;
    }

  });
