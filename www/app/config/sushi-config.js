/*global angular*/
(function () {
    'use strict';

    angular.module('app').constant('sushiConfig', {

        app: {
            key: 'webtree',
            name: 'Webtree',
            version: '1.0.0'
        },

        database: {
            name: 'webtree',
            version: '1.0'
        },

        debug: {
            enabled: false
        },

        endpoints: {
            baseUrl: 'http://maratona.herokuapp.com',

            defaults: {
                headers: {
                    'Content-Type': 'application/json'
                }
            },

            user: {
                login: {
                    url: '/login',
                    method: 'POST'
                }
            },
            request: {
                list: {
                    url: '/solicitacoes/loja/:lojaId',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                get: {
                    url: '/solicitacoes/:id',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                delete: {
                    url: '/solicitacoes/:id',
                    method: 'DELETE',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                }
            }
        },

        events: {
            CONNECTION_DICONNECTED: true,
            REQUEST_UNAUTHORIZED: true,
            APPLICATION_ERROR: true,
            CONNECTION_CHANGE: false,
            BATTERY_CRITICAL: false,
            BATTERY_LOW: false,
            BATTERY_STATUS: false,
            BARCODE_SUCCESS: false,
            BARCODE_ERROR: false
        }

    });

}());