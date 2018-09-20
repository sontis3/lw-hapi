'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /dir/test-objects/{testObjectId}
 */
module.exports = {
    /**
     * summary: Получить документ по ID
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: getTestObject
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/test-objects/{testObjectId}',
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
                path: '/dir/test-objects/{testObjectId}',
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
                path: '/dir/test-objects/{testObjectId}',
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
     * operationId: updateTestObject
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/test-objects/{testObjectId}',
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
                path: '/dir/test-objects/{testObjectId}',
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
                path: '/dir/test-objects/{testObjectId}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Удалить документ
     * description: Удалить документ с идентификатором testObjectId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: deleteTestObject
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/test-objects/{testObjectId}',
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
                path: '/dir/test-objects/{testObjectId}',
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
                path: '/dir/test-objects/{testObjectId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
