'use strict';

/**
 * @ngdoc function
 * @name fiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fiApp
 */
angular.module('fiApp')
	/* al pasarle localStoargeService hacems que en vez de leer las tareas desde un array estatico  las lee un local */
  .controller('MainCtrl', function ($scope, localStorageService) {
   
  	var tareasEnAlmacen = localStorageService.get('tareas');
  	$scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
  	$scope.$watch('tareas', function(){
  		localStorageService.add('tareas', $scope.tareas.join('\n'));
  	}, true);

  	/* esto si quiero que sea estatico
    $scope.tareas = [
      'Hacer las compras',
      'Otra tarea ',
      'OOooootra mas'
    ];
	*/
    $scope.addTarea = function(){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };

    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index, 1); //Splice es un método de java que permite eliminar un elemento del índice que se le indica
    };

  });

