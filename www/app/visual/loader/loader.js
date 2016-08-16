/*global angular*/
(function () {
    'use strict';

    function Loader($ionicLoading) {
        var self = this;

        self.start = function () {
            $ionicLoading.show({
                template: 'Carregando...'
            });
        };

        self.stop = function () {
            $ionicLoading.hide();
        };
    }

    Loader.$inject = ['$ionicLoading'];

    angular.module('app').service('loader', Loader);
}());