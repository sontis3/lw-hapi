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
  post: async function createCustomer(request, h) {
    let customer = request.payload;
    if (!customer) {
      return Boom.badData('No customer request data');
    }

    if (!customer.name) {
      return Boom.badRequest('Name is required field');
    }

    let result = await customersDal.post["201"](customer).then(
      result => { return h.response(result).code(201); },
      err => { return Boom.internal(err)}
    );

    return result;
  }
};
