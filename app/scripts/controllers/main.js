'use strict';

/**
 * @ngdoc function
 * @name fiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fiApp
 */
angular.module('fiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = [
      'Hacer las compras',
      'Otra tarea ',
      'OOooootra mas'
    ];
  });
