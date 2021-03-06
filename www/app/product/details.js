/*global angular*/
(function () {
    'use strict';

    function ProductDetails($location, userManager, toaster) {
        var vm = this;

        vm.login = function () {
            userManager.login(vm.user.login, vm.user.password).then(function (result) {
                if (result.success) {
                    $location.path('/perfis');
                }

                toaster.show(result.message);
            }, function (error) {
                toaster.show(error);
            });
        };
    }

    ProductDetails.$inject = ['$location', 'userManager', 'toaster'];

    angular.module('app').controller('productDetails', ProductDetails);

}());