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
  get: function (request, h) {
    let aaa = customersDal.findCustomers(request, h);
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
  post: async function (request, h) {
    let customer = request.payload;
    if (!customer) {
      return Boom.badData('No customer request data');
    }

    if (!customer.name) {
      return Boom.badRequest('Name is required field');
    }

    let result = await customersDal.createCustomer(customer)
      .then( result => { return h.response(result).code(201); })
      .catch(err => { return Boom.badRequest(err.message); });

    return result;
  }
};
