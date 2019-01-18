'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /catalogs/studies/{studyId}/content/info
 */
module.exports = {
    /**
     * summary: Получить инфо о контенте исследования
     * description: 
     * parameters: contentName
     * produces: 
     * responses: 200, 404
     * operationId: getStudyContentInfo
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}/content/info',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs/studies/{studyId}/content/info',
                operation: 'get',
                response: '404'
            }, callback);
        }
    }
};
