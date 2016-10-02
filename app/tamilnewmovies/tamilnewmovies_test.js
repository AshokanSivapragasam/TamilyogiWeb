'use strict';

describe('A global suite for tamilnewmovies in myApp', function () {

    beforeEach(module('myApp.tamilnewmovies'));
    beforeEach(module('myApp.common'));

    describe('A local suite for tamilnewmovies controller in myApp', function () {

        // Then we create some variables we're going to use
        var scope;

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
        }));

        it('Checks whether TamilNewMovies Controller is defined or not', inject(function ($controller) {
            //spec body
            var tamilNewMoviesController = $controller('TamilNewMoviesController', {$scope: scope});
            expect(tamilNewMoviesController).toBeDefined();
        }));

        it('Checks whether one or more tamil new movies are available', inject(function ($controller) {
            //spec body
            var tamilNewMoviesController = $controller('TamilNewMoviesController', {$scope: scope});
            expect(scope).toBeDefined();
            expect(scope.tamilMovies).toBeGreaterThan(0);
        }));
    });
});