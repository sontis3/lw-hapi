'use strict';

const Boom = require('boom');
const dal = require('../../../../../data/mongoose/studies-db');

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
    get: async function getStudyContentInfo(request, h) {
      const studyId = request.params.studyId;

      const result = await dal.getContentInfo(studyId)
        .then(contentInfoArray => {
          // const contentInfoArray = cursor.toArray();
          return h.response(contentInfoArray).code(200);
        })
        .catch(err => { return Boom.badRequest(err.message); });
      return result;
    }
};
