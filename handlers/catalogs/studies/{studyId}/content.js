'use strict';

const Boom = require('boom');
const dal = require('../../../../data/mongoose/studies-db');

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
     */
    post: async function uploadStudyFile(request, h) {
      const studyId = request.params.studyId;
      const studyFileData = request.payload;
      if (!studyFileData) {
        return Boom.badData('No upload file data');
      }

      const result = await dal.upload(studyId, studyFileData);
      return result;
    },
    
    /**
     * summary: Получить контент исследования
     * description: 
     * parameters: contentName
     * produces: 
     * responses: 200, 404
     */
    get: function getStudyContent(request, h) {
        return Boom.notImplemented();
    }
};
