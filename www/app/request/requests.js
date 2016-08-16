/*global angular*/
(function () {
    'use strict';

    function Requests($mdDialog, $location, requestManager, userManager, toaster) {
        var vm = this;

        vm.loadRequests = function () {
            var storeId = userManager.getCurrentUser().lojaId;
            
            requestManager.list(storeId).then(function (result) {
                vm.requests = result;
            }, function (error) {
                toaster.show(error.message);
            });
        };

        vm.openSearchModal = function (ev) {
            var confirm = $mdDialog.prompt().title('Buscar produto')
                .textContent('Digite um SKU ou código pai.')
                .placeholder('Código')
                .ariaLabel('Código')
                .initialValue('')
                .targetEvent(ev)
                .ok('ok')
                .cancel('Cancelar');

            $mdDialog.show(confirm).then(function (result) {
                alert(result);
            }, function () {
            });
        };

        vm.loadRequests();
    }

    Requests.$inject = ['$mdDialog', '$location', 'requestManager', 'userManager', 'toaster'];

    angular.module('app').controller('requests', Requests);

}());