'use strict';

/**
 * @ngdoc function
 * @name newsquizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsquizApp
 */
angular.module('newsquizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.quizes = [
      {
      	'name': 'geography',
      	'label': 'NKB:s awesome geo quiz'
      },
      {
      	'name': 'insects',
      	'label': 'Do these creatues have 4 legs?'
      }
    ];
  });
