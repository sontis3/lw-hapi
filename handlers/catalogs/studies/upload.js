'use strict';

const Boom = require('boom');
const dal = require('../../../data/mongoose/studies-db');

/**
 * Operations on /catalogs/studies/upload
 */
module.exports = {
    /**
     * summary: Загрузка файлов исследования
     * description: 
     * parameters: upFile, studyId
     * produces: 
     * responses: 200, 400
     */
    post: async function uploadStudyFile(request, h) {
      const studyFileData = request.payload;
      if (!studyFileData) {
        return Boom.badData('No upload file data');
      }

      const result = await dal.upload(studyFileData);
      // return Boom.notImplemented();
      return result;
    }
};
