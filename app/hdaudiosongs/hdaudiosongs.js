'use strict';

angular.module('myApp.hdaudiosongs', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hdaudiosongs', {
            templateUrl: 'hdaudiosongs/hdaudiosongs.html',
            controller: 'HdAudioSongsController'
        });
    }])

    .controller('HdAudioSongsController', ['$rootScope', '$scope', '$http', '$sce', '$routeParams', '$timeout', '$log', 'commonService', function ($rootScope, $scope, $http, $sce, $routeParams, $timeout, $log, commonService) {
        $scope.hdaudiosongs = [
            {
                id: 'audioplayer1',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Pasanga-2-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer2',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Bajirao-Mastani-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer3',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Thanga-Magan-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer4',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Pasanga-2-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer5',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Bajirao-Mastani-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer6',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Thanga-Magan-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer7',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Pasanga-2-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer8',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Bajirao-Mastani-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer9',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/audio/Munbe_vaa_theme.mp3'),
                thumbnailUrl: $sce.trustAsResourceUrl(commonService.vaultBaseUrl +  '/images/thumbnails/Thanga-Magan-2015-228x160.jpg'),
                audioType: 'audio/mp3',
                openPlayer: false
            }
        ];
    }])

    .directive('customAudioPlayer', ['$parse', function ($parse) {
        return {
            restrict: 'E',
            scope: {
                audiothumbnailurl: '=',
                audiotitle: '=',
                audiourl: '=',
                audioplayerid: '=',
                audiotype: '='
            },
            templateUrl: "hdaudiosongs/custom-audio-player-template.html",
            controller: ['$scope', function ($scope) {
                $scope.playMusic = function (audioPlayerId) {
                    document.getElementById(audioPlayerId).play();
                }

                $scope.stopMusic = function (audioPlayerId) {
                    document.getElementById(audioPlayerId).pause();
                    document.getElementById(audioPlayerId).currentTime = 0;
                }
            }],
            link: function (scope, element, attributes) {
                /*var model = $parse(attributes.fileModel);
                 var modelSetter = model.assign;*/

                element.bind('timeupdate', function () {
                    /*scope.$apply(function () {
                        modelSetter(scope, element.currentTime / element.duration);
                     });*/
                });
            }
        };
    }]);
