'use strict';
const mModel = require('../../models/mongoose/catalogs/study');
const { Readable } = require('stream');

/**
 * Operations on /catalogs/studies
 */
module.exports = {
  /**
   * summary: Получить список исследований.
   * description: По умолчанию все исследования.
Если имеется параметр enabled, то true - активные, false - неактивные
   * parameters: enabled, year
   * produces: 
   * responses: 200, 400
   */
  find: async function (filter) {
    let dbSelector = {};
    if (typeof (filter.enabled) !== 'undefined') {   //   'enabled' in req.query) {
      dbSelector.enabled = filter.enabled;
    }
    if (typeof (filter.year) !== 'undefined') {
      dbSelector.plan_year = filter.year;
    }
    
    return mModel.find(dbSelector).populate('customer', 'name').populate('test_object', 'name').exec();
  },

  /**
   * summary: Создать новый документ
   * description: 
   * parameters: body
   * produces: 
   * responses: 201, 400, 422
   */
  create: async function (appModel) {
    let result = mModel.init().then(() => {
      return mModel.create(appModel);
    });
    return result;
  },

  // загрузка файлов в базу
  upload: async function (studyId, buffer) {
    // ковертация буфера в Readable Stream
    const bufStream = new Readable();
    bufStream.push(buffer.upFile);
    bufStream.push(null);

    const mongodb = mModel.base.mongo;
    const bucket = new mongodb.GridFSBucket(mModel.db.db);
    const uploadStream = bucket.openUploadStream(buffer.fileName);
    uploadStream.options.contentType = buffer.fileType;
    uploadStream.options.metadata = {
      studyId: studyId
    };
    bufStream.pipe(uploadStream);
    return new Promise((resolve, reject) => {
      uploadStream
        .on('error', (error) => { reject(error); })
        .on('finish', () => { resolve(uploadStream.id.toString()); });
    });
  },

  /**
   * summary: Проверка наличия файла в GridFS
   * description: 
   * parameters: studyId - Id исследования, fileName - имя файла
   * produces: true/false
   */
  isFileExists: async function (studyId, fileName) {
  
  }
}