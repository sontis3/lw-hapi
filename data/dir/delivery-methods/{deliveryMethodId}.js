'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /dir/delivery-methods/{deliveryMethodId}
 */
module.exports = {
    /**
     * summary: Получить документ по ID
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: getDeliveryMethod
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/delivery-methods/{deliveryMethodId}',
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
                path: '/dir/delivery-methods/{deliveryMethodId}',
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
                path: '/dir/delivery-methods/{deliveryMethodId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Изменить документ
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     * operationId: updateDeliveryMethod
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/delivery-methods/{deliveryMethodId}',
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
                path: '/dir/delivery-methods/{deliveryMethodId}',
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
                path: '/dir/delivery-methods/{deliveryMethodId}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Удалить документ
     * description: Удалить документ с идентификатором deliveryMethodId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: deleteDeliveryMethod
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/delivery-methods/{deliveryMethodId}',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/delivery-methods/{deliveryMethodId}',
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
                path: '/dir/delivery-methods/{deliveryMethodId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
