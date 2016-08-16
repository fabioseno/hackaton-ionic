/*global angular*/
(function () {
    'use strict';

    function RequestManager($q, httpInvoker, serviceManager) {
        var list = function (storeId) {
            var promise =  httpInvoker.invoke('request', 'list', { query: { lojaId: storeId } });
            
            return serviceManager.handleCall(promise);
        },
            get = function (id) {
                var promise = httpInvoker.invoke('request', 'get', { query: { id: id } });
                
                return serviceManager.handleCall(promise);
            };

        return {
            list: list,
            get: get
        };
    }

    RequestManager.$inject = ['$q', 'httpInvoker', 'serviceManager'];

    angular.module('app').service('requestManager', RequestManager);

}());