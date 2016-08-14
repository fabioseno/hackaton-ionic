/*global angular*/
(function () {
    'use strict';

    function Base($scope, $ionicModal, userSession) {
        var vm = this;
    }

    Base.$inject = [];

    angular.module('app').controller('base', Base);

}());