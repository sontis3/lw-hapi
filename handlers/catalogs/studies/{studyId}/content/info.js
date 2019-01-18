'use strict';

const Boom = require('boom');

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
     */
    get: function getStudyContentInfo(request, h) {
        return Boom.notImplemented();
    }
};
