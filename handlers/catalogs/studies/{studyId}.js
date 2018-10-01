'use strict';

const Boom = require('boom');

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
     */
    get: function getStudy(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Изменить исследование
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     */
    put: function updateStudy(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Удалить исследование
     * description: Удалить исследование с идентификатором studyId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     */
    delete: function deleteStudy(request, h) {
        return Boom.notImplemented();
    }
};
