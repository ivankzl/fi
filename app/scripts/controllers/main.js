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

    $scope.addTarea = function(){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };

    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index, 1); //Splice es un método de java que permite eliminar un elemento del índice que se le indica
    };

  });

