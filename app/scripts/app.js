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

  

  .config(function ($routeProvider) {

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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
