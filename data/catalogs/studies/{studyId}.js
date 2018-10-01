'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /catalogs/studies/{studyId}
 */
module.exports = {
    /**
     * summary: Получить исследование по ID
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: getStudy
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}',
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
                path: '/catalogs/studies/{studyId}',
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
                path: '/catalogs/studies/{studyId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Изменить исследование
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     * operationId: updateStudy
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}',
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
                path: '/catalogs/studies/{studyId}',
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
                path: '/catalogs/studies/{studyId}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Удалить исследование
     * description: Удалить исследование с идентификатором studyId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     * operationId: deleteStudy
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}',
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
                path: '/catalogs/studies/{studyId}',
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
                path: '/catalogs/studies/{studyId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
