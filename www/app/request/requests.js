/*global angular*/
(function () {
    'use strict';

    function Requests($mdDialog, $window, $location, requestManager, userManager, toaster) {
        var vm = this;

        vm.loadRequests = function () {
            var storeId = userManager.getCurrentUser().lojaId;

            requestManager.list(storeId).then(function (result) {
                var requests, request, status = {}, profile, statusOptions, i;

                requests = result;

                profile = userManager.getUserProfile();

                for (i = 0; i < requests.length; i += 1) {
                    request = requests[i];

                    statusOptions = requestManager.status[request.status];

                    if ((profile === 'V' && statusOptions.visibleToSeller)
                        || (profile === 'E' && statusOptions.visibleToStocker)) {

                        if (!status[request.status]) {
                            status[request.status] = {
                                name: statusOptions.name,
                                requests: []
                            };

                            if (profile === 'V') {
                                status[request.status].order =  statusOptions.sellerOrder;
                            } else {
                                status[request.status].order =  statusOptions.stockOrder;
                            }
                        }

                        status[request.status].requests.push(request);
                    }
                }

                vm.status = status;
            }, function (error) {
                toaster.show(error.message);
            });
        };

        vm.openRequest = function (request) {
            if (request) {
                requestManager.selectRequest(request);
                $location.path('/requests/' + request.id);
            }
        };

        vm.canDelete = function (request) {
            return requestManager.canDelete(request);
        };

        vm.removeRequest = function (request) {
            if (vm.canDelete(request)) {
                if ($window.confirm('Confirma a exclusão da solicitação?')) {
                    requestManager.remove(request.id).then(function (result) {
                        if (result.success) {
                            vm.loadRequests();
                        }
                    }, function (error) {
                        toaster.show(error.message);
                    });
                }
            }
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

    Requests.$inject = ['$mdDialog', '$window', '$location', 'requestManager', 'userManager', 'toaster'];

    angular.module('app').controller('requests', Requests);

}());