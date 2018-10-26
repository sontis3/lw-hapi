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
Если имеется параметр short, то true - краткий ответ (имя, ид объекта), false - полный ответ (все поля).
   * parameters: enabled, short
   * produces: 
   * responses: 200, 400
   */
  find: async function (filter) {
    let dbSelector = {};
    if (typeof (filter.enabled) !== 'undefined') {   //   'enabled' in req.query) {
      dbSelector.enabled = filter.enabled;
    }

    if (typeof (filter.short) !== 'undefined' && filter.short == true) {
      return mModel.find(dbSelector).select({ name: 1 }).exec();
    } else {
      return mModel.find(dbSelector).exec();
    }
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
