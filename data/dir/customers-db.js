'use strict';
const Customer = require('../../models/dir/customer');
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
   * operationId: findCustomers
   */
  get: {
    200: function (req, res) {
      if (typeof(req.query.active) !== 'undefined') {   //   'active' in req.query) {
        return "Свойство есть";
        // return Customer.find();
      } else {
        return "Свойства нет";
        // return Customer.find();
      }
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
  post: {
    201: function (req, res, callback) {
      /**
       * Using mock data generator module.
       * Replace this by actual data for the api.
       */
      Mockgen().responses({
        path: '/dir/customers',
        operation: 'post',
        response: '201'
      }, callback);
    }
  }
};
