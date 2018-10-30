'use strict';
const mModel = require('../../models/mongoose/catalogs/study');

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
      dbSelector.planYear = filter.year;
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
  }

}