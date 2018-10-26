'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /dir/test-objects
 */
module.exports = {
    /**
     * summary: Получить список документов.
     * description: По умолчанию все документы.
Если имеется параметр enabled, то true - активные, false - неактивные.
Если имеется параметр short, то true - краткий ответ (имя, ид объекта), false - полный ответ (все поля).
     * parameters: enabled, short
     * produces: 
     * responses: 200, 400
     * operationId: findTestObjects
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/test-objects',
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
                path: '/dir/test-objects',
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
     * operationId: createTestObject
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/test-objects',
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
                path: '/dir/test-objects',
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
                path: '/dir/test-objects',
                operation: 'post',
                response: '422'
            }, callback);
        }
    }
};
