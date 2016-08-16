/*global angular*/
(function () {
    'use strict';

    function ServiceManager($location, $q, $timeout, sushiConfig, loader, toaster) {
        var self = this;

        self.$location = $location;

        self.loader = loader;

        self.toaster = toaster;

        self.sushiConfig = sushiConfig;

        self.handleCall = function (promise, onSuccessCallback, onErrorCallback, onFinishCallback) {
            self.onStart();

            return promise.then(function (param) {
                if (param && param.data && param.data.sucesso) {
                    if (onSuccessCallback) {
                        onSuccessCallback(param.data);
                    }
                } else {
                    if (angular.isArray(param.data.mensagens) && param.data.mensagens.length > 0) {
                        self.toaster.error(param.data.mensagens[0].descricao);
                    }
                }

                if (onFinishCallback) {
                    onFinishCallback();
                } else {
                    self.loader.stop();
                }

                return $q.resolve(param.data.data);
            }, function (param) {
                if (onErrorCallback) {
                    onErrorCallback();
                } else {
                    if (angular.isArray(param.data.mensagens) && param.data.mensagens.length > 0) {
                        self.toaster.error(param.data.mensagens[0].descricao);
                    }
                }

                if (onFinishCallback) {
                    onFinishCallback();
                } else {
                    self.loader.stop();
                }

                return $q.reject(param.data);
            });
        };

        self.onStart = function (customCallback) {
            if (customCallback) {
                customCallback();
            } else {
                self.loader.start();
            }
        };
    }

    ServiceManager.$inject = ['$location', '$q', '$timeout', 'sushiConfig', 'loader', 'toaster'];

    angular.module('app').service('serviceManager', ServiceManager);

}());