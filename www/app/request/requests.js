/*global angular*/
(function () {
    'use strict';

    function Requests($mdDialog, $location, userManager, toaster) {
        var vm = this;

        vm.loadRequests = function () {

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

    Requests.$inject = ['$mdDialog', '$location', 'userManager', 'toaster'];

    angular.module('app').controller('requests', Requests);

}());