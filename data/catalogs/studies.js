'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /catalogs/studies
 */
module.exports = {
    /**
     * summary: Получить список исследований.
     * description: По умолчанию все исследования.
Если имеется параметр enabled, то true - активные, false - неактивные
     * parameters: enabled, year
     * produces: 
     * responses: 200, 400
     * operationId: findStudies
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies',
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
                path: '/catalogs/studies',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Создать новое исследование
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     * operationId: createStudy
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies',
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
                path: '/catalogs/studies',
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
                path: '/catalogs/studies',
                operation: 'post',
                response: '422'
            }, callback);
        }
    }
};
