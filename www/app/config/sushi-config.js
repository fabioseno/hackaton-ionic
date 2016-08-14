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
            client: {
                login: {
                    url: '/rest/login',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                resetPassword: {
                    url: '/rest/login/reset',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                redefinePassword: {
                    url: '/rest/login/changePassword',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                changePassword: {
                    url: '/rest/clientes/:clientId/alterarsenha',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                registerClient: {
                    url: '/rest/clientes/pre',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                list: {
                    url: '/rest/clientes',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                get: {
                    url: '/rest/clientes/:id',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listPreRegistered: {
                    url: '/rest/clientes/pendentes',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listPendencies: {
                    url: '/rest/clientes/aprovacao',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                getPreRegistration: {
                    url: '/rest/clientes/:id',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                approveRegistration: {
                    url: '/rest/clientes/:id/aprovar',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                rejectRegistration: {
                    url: '/rest/clientes/:id/reprovar',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                addPhone: {
                    url: '/rest/clientes/:clientId/telefones/',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                updatePhone: {
                    url: '/rest/clientes/:clientId/telefones/:phoneId',
                    method: 'PUT',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                deletePhone: {
                    url: '/rest/clientes/:clientId/telefones/:phoneId',
                    method: 'DELETE',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                addAddress: {
                    url: '/rest/clientes/:clientId/enderecos/',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                updateAddress: {
                    url: '/rest/clientes/:clientId/enderecos/:addressId',
                    method: 'PUT',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                deleteAddress: {
                    url: '/rest/clientes/:clientId/enderecos/:addressId',
                    method: 'DELETE',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listBanks: {
                    url: '/rest/bancos/',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listClientBankAccounts: {
                    url: '/rest/clientes/:clientId/dadosbancarios',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                addBankAccount: {
                    url: '/rest/clientes/:clientId/dadosbancarios/',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                deleteBankAccount: {
                    url: '/rest/clientes/:clientId/dadosbancarios/:bankAccountId',
                    method: 'DELETE',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                setBankAccountAsDefault: {
                    url: '/rest/clientes/:clientId/enderecos/:bankAccountId/ativar',
                    method: 'DELETE',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listPaymentPlans: {
                    url: '/rest/clientes/:clientId/planos',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                getClientPaymentPlan: {
                    url: '/rest/clientes/:clientId/meuplano',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                selectPaymentPlan: {
                    url: '/rest/clientes/:clientId/planos/:paymentPlanId',
                    method: 'PUT',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listClientDocuments: {
                    url: '/rest/clientes/:clientId/documentos',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                getClientDocument: {
                    url: '/rest/clientes/:clientId/documentos/:documentId',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                addClientDocument: {
                    url: '/rest/clientes/:clientId/documentos',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                deleteClientDocument: {
                    url: '/rest/clientes/:clientId/documentos/:documentId',
                    method: 'DELETE',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listTransactionsByModality: {
                    url: '/rest/clientes/:clientId/listarPorModalidade',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listTransactionsByRelease: {
                    url: '/rest/clientes/:clientId/listarPorDataLancamento',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listMySales: {
                    url: '/rest/clientes/:clientId/listarVendas',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listMyEarnings: {
                    url: '/rest/clientes/:clientId/listarRecebimentos',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                getClientTransactions: {
                    url: '/rest/clientes/:clientId/listarPorConsumidor',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                createTransaction: {
                    url: '/rest/transacoes',
                    method: 'POST',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listCardBrands: {
                    url: '/rest/bandeiras',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                listClientCharges: {
                    url: '/rest/clientes/:clientId/cobrancas',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                getClientCharge: {
                    url: '/rest/clientes/:clientId/cobrancas/:chargeId',
                    method: 'GET',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                cancelClientCharge: {
                    url: '/rest/clientes/:clientId/cobrancas/:chargeId/cancelar',
                    method: 'PUT',
                    connectivityPolicy: 'ONLINE_DATA_ONLY'
                },
                updateClientCharge: {
                    url: '/rest/clientes/:clientId/cobrancas/:chargeId',
                    method: 'PUT',
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