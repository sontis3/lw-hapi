'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /dir/customers
 */
module.exports = {
    /**
     * summary: Получить список заказчиков исследований.
     * description: По умолчанию все заказчики.
Если имеется параметр enabled, то true - активные, false - неактивные
     * parameters: enabled, short
     * produces: 
     * responses: 200, 400
     * operationId: findCustomers
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers',
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
                path: '/dir/customers',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Создать нового заказчика
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     * operationId: createCustomer
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers',
                operation: 'post',
                response: '201'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers',
                operation: 'post',
                response: '400'
            }, callback);
        },
        422: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers',
                operation: 'post',
                response: '422'
            }, callback);
        }
    }
};
