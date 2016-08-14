/*global angular*/
(function () {
    'use strict';

    function Login($location, userManager, toaster) {
        var vm = this;

        vm.login = function () {
            userManager.login(vm.user.login, vm.user.password).then(function (result) {
                if (result.success) {
                    toaster.show('Olá, ' + result.data.nome);
                    $location.path('/perfis');
                } else {
                    toaster.show(result.data.message);
                }
            }, function (error) {
                toaster.show(error.message);
            });
        };
    }

    Login.$inject = ['$location', 'userManager', 'toaster'];

    angular.module('app').controller('login', Login);

}());