'use strict';

/**
 * @ngdoc function
 * @name fiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fiApp
 */
angular.module('fiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
