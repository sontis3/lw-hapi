'use strict';

const Boom = require('boom');

/**
 * Operations on /dir/test-objects
 */
module.exports = {
    /**
     * summary: Получить список документов.
     * description: По умолчанию все документы.
Если имеется параметр enabled, то true - активные, false - неактивные
     * parameters: enabled
     * produces: 
     * responses: 200, 400
     */
    get: function findTestObjects(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Создать новый документ
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     */
    post: function createTestObject(request, h) {
        return Boom.notImplemented();
    }
};
