'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /dir/delivery-methods
 */
module.exports = {
    /**
     * summary: Получить список способов доставки.
     * description: По умолчанию все документы.
Если имеется параметр enabled, то true - активные, false - неактивные
     * parameters: enabled
     * produces: 
     * responses: 200, 400
     * operationId: findDeliveryMethods
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/delivery-methods',
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
                path: '/dir/delivery-methods',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Создать новый документ
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     * operationId: createDeliveryMethod
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/delivery-methods',
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
                path: '/dir/delivery-methods',
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
                path: '/dir/delivery-methods',
                operation: 'post',
                response: '422'
            }, callback);
        }
    }
};
