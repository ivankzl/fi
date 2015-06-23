'use strict';

/**
 * @ngdoc overview
 * @name fiApp
 * @description
 * # fiApp
 *
 * Main module of the application.
 */
 angular
 .module('fiApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch', 
  'ui.sortable',
  'LocalStorageModule',
  'ngGrid'
  ])


 .config(function ($routeProvider, $locationProvider) {

  /* para generar una nueva página, ruta, no hace falta hacerlo a mano, usar la consola: yo angular:route tareas */

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/mesas', {
    templateUrl: 'views/mesas.html',
    controller: 'MesasCtrl'
  })
  .when('/estado', {
    templateUrl: 'views/estado.html',
    controller: 'EstadoCtrl'
  })
  .when('/certificado', {
    templateUrl: 'views/certificado.html',
    controller: 'CertificadoCtrl'
  })
  .when('/tareas', {
    templateUrl: 'views/tareas.html',
    controller: 'TareasCtrl'
  })
  .when('/estado', {
    templateUrl: 'views/estado.html',
    controller: 'EstadoCtrl'
  })
  .when('/biblioteca', {
    templateUrl: 'views/biblioteca.html',
    controller: 'BibliotecaCtrl'
  })
  .when('/login', {
    controller: 'LoginCtrl',
    templateUrl: 'views/login.html',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/views/login.html'
  });
})

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }])