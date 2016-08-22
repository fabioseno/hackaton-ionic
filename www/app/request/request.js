/*global angular*/
(function () {
    'use strict';

    function Request($stateParams, $location, requestManager, toaster) {
        var vm = this;

        vm.loadRequest = function (id) {
            if (id) {
                requestManager.get(id).then(function (result) {
                    if (result.success) {
                        vm.request = result.data;
                    }
                }, function (error) {
                    toaster.show(error);
                });
            }
        };
        
        vm.loadRequest($stateParams.id);
    }

    Request.$inject = ['$stateParams', '$location', 'requestManager', 'toaster'];

    angular.module('app').controller('request', Request);

}());