'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /catalogs/studies/{studyId}/content
 */
module.exports = {
    /**
     * summary: Загрузка файлов исследования
     * description: 
     * parameters: upFile, fileName, fileType
     * produces: 
     * responses: 200, 400
     * operationId: uploadStudyFile
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}/content',
                operation: 'post',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}/content',
                operation: 'post',
                response: '400'
            }, callback);
        }
    }
};
