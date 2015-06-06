'use strict';

/**
 * @ngdoc overview
 * @name newsquizApp
 * @description
 * # newsquizApp
 *
 * Main module of the application.
 */
var app = angular
  .module('newsquizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:name', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
