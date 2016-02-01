angular.module('myApp.common', [])

    .service('commonService', [function () {
        var self = this;
        self.currentMovieId = 0;
        self.currentVideoMirrorId = 0;
        self.webServiceBaseUrl = 'http://hydpcm347350d/TamilYogiWebApi';
        self.vaultBaseUrl = 'http://hydpcm347350d/vault';
    }]);