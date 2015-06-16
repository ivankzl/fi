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
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
