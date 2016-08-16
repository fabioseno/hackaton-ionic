/*global angular*/
(function () {
    'use strict';

    function ProfileSelection($location, $timeout, userManager) {
        var vm = this;

        vm.selectProfile = function (profile) {
            userManager.setUserProfile(profile);

            $timeout(function () {
                $location.path('/requests');
            }, 500);

        };
    }

    ProfileSelection.$inject = ['$location', '$timeout', 'userManager'];

    angular.module('app').controller('profileSelection', ProfileSelection);

}());