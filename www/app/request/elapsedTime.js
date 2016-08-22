/*global angular*/
(function () {
    'use strict';

    function ElapsedTime() {

        return function (datetime) {
            var now = new Date(),
                result = '';

            
            return 'Há 1 dia';
        };
    }

    ElapsedTime.$inject = [];

    angular.module('app').filter('elapsedTime', ElapsedTime);

}());