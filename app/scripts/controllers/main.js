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

    $scope.currentQuestionIndex = 0;
    $scope.$watch('currentQuestionIndex', function(newVal) {
    	$scope.currentQuestion = questions[$scope.currentQuestionIndex];
    })
    
    

    $scope.answer = function(answer) {
    	// Correct answer
    	if (answer == $scope.currentQuestion.correctAnswer) {

    	}
    	// Wrong answer
    	else {
    		$scope.lifesLeft = $scope.lifesLeft - 1;
    	}
    	$scope.currentQuestionIndex = $scope.currentQuestionIndex + 1;
    }

  });
