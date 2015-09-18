(function () {
  'use strict';

  angular
    .module('clouai.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/', {
      controller: 'DashboardController', 
      controllerAs: 'vm',
      templateUrl: '/static/html/layout/dashboard.html'
    }).when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/html/authentication/signup.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/html/authentication/signin.html'
    }).otherwise('/');
  }
})();