'use strict';

angular.module('myApp.devtips', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/devtips', {
            templateUrl: 'devtips/devtips.html',
            controller: 'DevTipsController'
        });
    }])

    .controller('DevTipsController', ['$scope', function ($scope) {
        /*Headers*/
        $scope.navigationMenuSections = [
            {title: "About", relativeUri: "#about", isActive: true},
            {title: "Youtube", relativeUri: "#youtube", isActive: false},
            {title: "Mentoring", relativeUri: "#mentoring", isActive: false},
            {title: "Vines", relativeUri: "#vines", isActive: false},
            {title: "Articles", relativeUri: "#articles", isActive: false},
            {title: "Podcast", relativeUri: "#podcast", isActive: false},
            {title: "Contact", relativeUri: "#contact", isActive: false}
        ];

        $scope.navigateTo = function(sectionName){
            for(var idx = 0; idx < $scope.navigationMenuSections.length; idx += 1) {
                $scope.navigationMenuSections[idx].isActive = $scope.navigationMenuSections[idx].title === sectionName;
            }
        };

        $scope.aboutSection = {
            posterImageSource: "http://localhost/vault/images/posters/BruceLee001.jpg"
        };

        $scope.youtubeSection = {
            youtubeVideoImageStrips: [
                {source: "http://localhost/vault/images/thumbnails/BruceLee001.jpg"},
                {source: "http://localhost/vault/images/thumbnails/BruceLee002.jpg"},
                {source: "http://localhost/vault/images/thumbnails/BruceLee003.jpg"},
                {source: "http://localhost/vault/images/thumbnails/BruceLee004.jpg"}
            ]
        };

        $scope.mentoringSection = {
            posterImageSource: "http://localhost/vault/images/posters/BruceLee002.jpg"
        };

        $scope.vinesSection = {
            posterImageSource: "http://localhost/vault/images/posters/BruceLee003.jpg"
        };
    }]);
