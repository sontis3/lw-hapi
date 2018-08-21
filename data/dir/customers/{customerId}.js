'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /dir/customers/{customerId}
 */
module.exports = {
    /**
     * summary: Получить заказчика по ID
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: getCustomer
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'get',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Изменить заказчика
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     * operationId: updateCustomer
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'put',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Удалить заказчика
     * description: Удалить заказчика с идентификатором customerId
     * parameters: 
     * produces: 
     * responses: 204, 400, 404
     * operationId: deleteCustomer
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'delete',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
