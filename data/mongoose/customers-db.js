'use strict';
const mModel = require('../../models/mongoose/customer');

/**
 * Operations on /dir/customers
 */
module.exports = {
  /**
   * summary: Получить список заказчиков/спонсоров исследований.
   * description: По умолчанию все заказчики.
Если имеется параметр enabled, то true - активные, false - неактивные
   * parameters: enabled
   * produces: 
   * responses: 200
   * operationId: findCustomers
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
   * summary: Создать нового заказчика
   * description: 
   * parameters: body
   * produces: 
   * responses: 201
   * operationId: createCustomer
   */
  create: async function (appModel) {
    let result = mModel.init().then(() => {
      return mModel.create(appModel);
    });
    return result;
  },

  /**
  * summary: Изменить заказчика
  * description: 
  * parameters: body
  * produces: 
  * responses: 200, 400, 404
  */
  update: async function (id, appModel) {
    return mModel.findByIdAndUpdate(id, appModel, { new: true }).exec();
  },

  /**
   * summary: Удалить заказчика
   * description: Удалить заказчика с идентификатором id
   * parameters: 
   * produces: 
   * responses: 204, 400, 404
   */
  delete: async function (id) {
    return mModel.findByIdAndDelete(id).exec();
  }

};
