'use strict';

angular.module('myApp.grabthebeast', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/grabthebeast', {
            templateUrl: 'grabthebeast/grabthebeast.html',
            controller: 'GrabTheBeastController'
        });
    }])

    .controller('GrabTheBeastController', ['$scope', '$http', 'commonService', function ($scope, $http, commonService) {
        $http.get(commonService.webServiceBaseUrl +  '/resources/movies')
            .then(function (response) {
                $scope.tamilMovies = response.data;
            }, function (errorMessage) {
                alert('failed');
            });
    }]);
