/*global angular, cordova, StatusBar*/
(function () {
    'use strict';

    function Config($stateProvider, $urlRouterProvider) {

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/user/login.html',
            controller: 'login as vm'
        }).state('perfis', {
            url: '/perfis',
            templateUrl: 'app/user/selection.html',
            controller: 'profileSelection as vm'
        }).state('request', {
            url: '/requests/:id',
            templateUrl: 'app/request/request.html',
            controller: 'request as vm'
        }).state('requests', {
            url: '/requests',
            templateUrl: 'app/request/requests.html',
            controller: 'requests as vm'
        }).state('product', {
            url: '/product',
            templateUrl: 'app/product/details.html',
            controller: 'productDetails as vm'
        });

        $urlRouterProvider.when('/', '/login').otherwise('/login');
    }

    function Run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    Run.$inject = ['$ionicPlatform'];

    angular.module('app', ['ionic', 'sushi']).config(Config).run(Run);

}());