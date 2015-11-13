var ngApp = angular.module("myApp", ['ngRoute']);
  
  ngApp.config(function ($routeProvider, $locationProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });


  ngApp.controller('AppCtrl', function ($scope, $http) {

  })
  ngApp.controller('MyCtrl1', function ($scope) {
    // write Ctrl here
  })
  ngApp.controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
