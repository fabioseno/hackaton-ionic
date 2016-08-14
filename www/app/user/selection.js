/*global angular*/
(function () {
    'use strict';

    function ProfileSelection($location, userSession) {
        var vm = this;

        vm.login = function (item) {
            $location.path('/perfis');
        };
    }

    ProfileSelection.$inject = ['$location', 'userSession'];

    angular.module('app').controller('profileSelection', ProfileSelection);

}());