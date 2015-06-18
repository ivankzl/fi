'use strict';

angular.module('fiApp')
.controller('TareasCtrl', function ($scope, $http) {
	$http.get('http://localhost:9000/miembros.json').success(function(data){
		$scope.miembros = data
	})

	/* Tabla ng grid */
	$scope.gridOptions = {
		data: 'miembros',
		columnDefs: [
		{field:'no', displayName:'N°.'},
		{field:'nombre', displayName:'Nombre'},
		{field:'fidelidad', displayName:'Puntos Fidelidad'},
		{field:'tipoMiembro', displayName:'Tipo de Mimebro'}
		]
	};

	/* Todo lo respectivo a la lsita de tareas */
	$scope.tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
	
    $scope.addTarea = function(){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };

    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index, 1); //Splice es un método de java que permite eliminar un elemento del índice que se le indica
    };

});
