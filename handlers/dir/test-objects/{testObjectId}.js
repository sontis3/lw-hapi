'use strict';

const Boom = require('boom');

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
     */
    get: function getTestObject(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Изменить документ
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     */
    put: function updateTestObject(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Удалить документ
     * description: Удалить документ с идентификатором testObjectId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     */
    delete: function deleteTestObject(request, h) {
        return Boom.notImplemented();
    }
};
