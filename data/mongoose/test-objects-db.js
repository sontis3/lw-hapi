'use strict';
const mModel = require('../../models/mongoose/test-object');

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
  find: async function (filter) {
    let dbSelector = {};
    if (typeof (filter.enabled) !== 'undefined') {   //   'enabled' in req.query) {
      dbSelector = { enabled: filter.enabled };
      // return "Свойство есть";
      // return mModel.find();
    } else {
      // return "Свойства нет";
      // return mModel.find();
    }
    return mModel.find(dbSelector).exec();
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

  /**
   * summary: Изменить документ
   * description: 
   * parameters: body
   * produces: 
   * responses: 200, 400, 404
   */
  update: async function (id, appModel) {
    return mModel.findByIdAndUpdate(id, appModel, { new: true }).exec();
  },

  /**
   * summary: Удалить документ
   * description: Удалить документ с идентификатором id
   * parameters: 
   * produces: 
   * responses: 200, 400, 404
   */
  delete: async function (id) {
    return mModel.findByIdAndDelete(id).exec();
  }
};
