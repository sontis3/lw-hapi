'use strict';

const Boom = require('boom');
const customersDal = require('../../data/dir/customers-db');

/**
 * Operations on /dir/customers
 */
module.exports = {
  /**
   * summary: Получить список заказчиков/спонсоров исследований.
   * description: По умолчанию все заказчики.
Если имеется параметр active, то true - активные, false - неактивные
   * parameters: active
   * produces: 
   * responses: 200
   */
  get: function findCustomers(request, h) {
    let aaa = customersDal.get["200"](request, h);
    return aaa;
    // return Boom.notImplemented();
  },

  /**
   * summary: Создать нового заказчика
   * description: 
   * parameters: body
   * produces: 
   * responses: 201
   */
  post: function createCustomer(request, h) {
    return Boom.notImplemented();
  }
};
