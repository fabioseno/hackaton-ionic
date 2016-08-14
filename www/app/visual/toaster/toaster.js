/*global angular*/
angular.module('app').service('toaster', ['$ionicLoading', function ($ionicLoading) {
    'use strict';

    this.show = function (message, options) {

        if (!message) {
            message = '';
        }
        if (!options) {
            options = {
                template: message,
                noBackdrop: true,
                duration: 1000
            };
        }

        $ionicLoading.show(options);
    };

    this.hide = function () {
        $ionicLoading.hide();
    };
}]);