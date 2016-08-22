/*global angular*/
(function () {
    'use strict';

    function RequestManager($q, httpInvoker, serviceManager, userManager) {
        var status = {
            Rascunho: {
                code: 'Rascunho',
                name: 'Rascunho',
                visibleToSeller: true,
                sellerOrder: 2,
                visibleToStocker: false,
                stockOrder: 9
            },
            Pendente: {
                code: 'Pendente',
                name: 'Pendente',
                visibleToSeller: false,
                sellerOrder: 9,
                visibleToStocker: true,
                stockOrder: 2
            },
            EmSeparacao: {
                code: 'EmSeparacao',
                name: 'Em Separação',
                visibleToSeller: false,
                sellerOrder: 9,
                visibleToStocker: true,
                stockOrder: 1
            },
            Separada: {
                code: 'Separada',
                name: 'Separada',
                visibleToSeller: true,
                sellerOrder: 1,
                visibleToStocker: false,
                stockOrder: 9
            }
        },

            selectedRequest,

            selectRequest = function (request) {
                selectedRequest = request;
            },

            getSelectedRequest = function () {
                return selectedRequest;
            },

            canDelete = function (request) {
                var profile = userManager.getUserProfile(),
                    canDelete = false;

                if (request) {
                    canDelete = (profile === 'V' && request.status === 'Rascunho');
                }
                
                return canDelete;
            },

            list = function (storeId) {
                var promise =  httpInvoker.invoke('request', 'list', { query: { lojaId: storeId } });

                return serviceManager.handleCall(promise);
            },

            get = function (id) {
                var promise = httpInvoker.invoke('request', 'get', { query: { id: id } });

                return serviceManager.handleCall(promise);
            },
            
            remove = function (id) {
                var promise = httpInvoker.invoke('request', 'remove', { query: { id: id } });

                return serviceManager.handleCall(promise);
            };

        return {
            status: status,
            selectRequest: selectRequest,
            getSelectedRequest: getSelectedRequest,
            list: list,
            get: get,
            remove: remove
        };
    }

    RequestManager.$inject = ['$q', 'httpInvoker', 'serviceManager', 'userManager'];

    angular.module('app').service('requestManager', RequestManager);

}());