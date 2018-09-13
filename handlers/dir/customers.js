'use strict';

const Boom = require('boom');
const customersDal = require('../../data/dir/customers-db');

/**
 * Operations on /dir/customers
 */
module.exports = {
    /**
     * summary: Получить список заказчиков исследований.
     * description: По умолчанию все заказчики.
Если имеется параметр enabled, то true - активные, false - неактивные
     * parameters: enabled
     * produces: 
     * responses: 200, 400
     */
    get: async function findCustomers(request, h) {
      const filter = request.query;
      let result = await customersDal.findCustomers(filter)
        .then(dbResult => { return dbResult; })
        .catch(err => { return Boom.badRequest(err.message); });
      return result;
      },
    /**
     * summary: Создать нового заказчика
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     */
    post: async function createCustomer(request, h) {
      const customer = request.payload;
      if (!customer) {
        return Boom.badData('No customer request data');
      }
  
      if (!customer.name) {
        return Boom.badRequest('Name is required field');
      }
  
      let result = await customersDal.createCustomer(customer)
        .then(dbResult => { return h.response(dbResult).code(201); })
        .catch(err => { return Boom.badRequest(err.message); });
      return result;
      }
};
