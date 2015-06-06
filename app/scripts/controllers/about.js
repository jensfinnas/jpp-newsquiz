'use strict';

/**
 * @ngdoc function
 * @name newsquizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsquizApp
 */
angular.module('newsquizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
