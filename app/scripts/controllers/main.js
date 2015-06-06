'use strict';

/**
 * @ngdoc function
 * @name newsquizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsquizApp
 */
angular.module('newsquizApp')
  .controller('MainCtrl', function ($scope, $timeout, $filter) {
    var settings = {
    	secondsPerQuestion: 3,
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

    var resetCounter = function() {
	    $scope.currentTime = settings.secondsPerQuestion * 10;
    }
    $scope.onTimeout = function(){
        $scope.currentTime--;
        if ($scope.currentTime < 0) {
        	resetCounter();
    		questions[$scope.currentQuestionIndex].status = 'unanswered';
        	$scope.lifesLeft--;
        }
        timer = $timeout($scope.onTimeout,100);
    }
    resetCounter();
    var timer = $timeout($scope.onTimeout,100);

    $scope.lifesLeft = settings.numberOfLifes;
    $scope.getPoints = function() {
    	return  $filter('filter')(questions, {'status': 'correct'}).length;
    };

    $scope.currentQuestionIndex = 0;
    $scope.$watch('currentQuestionIndex', function(newVal) {
    	$scope.currentQuestion = questions[$scope.currentQuestionIndex];
    	
    	// If last question
    	if ($scope.currentQuestionIndex == questions.length) {
    		finish();
    	}
    });
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
