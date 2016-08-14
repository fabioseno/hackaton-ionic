/*global angular*/
(function () {
    'use strict';

    function UserManager($q, httpInvoker) {
        var currentUser = {},

            login = function (login, password) {
                var defer = $q.defer(),
                    data = {
                        chapa: login,
                        senha: password
                    };

                httpInvoker.invoke('user', 'login', { data: data }).then(function (result) {
                    currentUser = result.data;
                    defer.resolve(result.data);
                }, function (error) {
                    defer.reject(error.data);
                });

                return defer.promise;
            },

            getCurrentUser = function () {
                return currentUser;
            },

            setUserProfile = function (profile) {
                currentUser.selectedProfile = profile;
            };

        return {
            login: login,
            getCurrentUser: getCurrentUser,
            setUserProfile: setUserProfile
        };
    }

    UserManager.$inject = ['$q', 'httpInvoker'];

    angular.module('app').service('userManager', UserManager);

}());