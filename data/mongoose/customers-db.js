'use strict';
const Customer = require('../../models/mongoose/customer');

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
  findCustomers: async function (filter) {
    let dbSelector = {};
    if (typeof (filter.enabled) !== 'undefined') {   //   'enabled' in req.query) {
        dbSelector = { enabled: filter.enabled };
        // return "Свойство есть";
        // return Customer.find();
      } else {
        // return "Свойства нет";
        // return Customer.find();
      }
      return Customer.find(dbSelector).exec();
  },

  /**
   * summary: Создать нового заказчика
   * description: 
   * parameters: body
   * produces: 
   * responses: 201
   * operationId: createCustomer
   */
  createCustomer: async function (customer) {
    let result = Customer.init().then(() => {
      return Customer.create({ name: customer.name, enabled: customer.enabled });
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
 updateCustomer: async function (customerId, customer) {
   return Customer.findByIdAndUpdate(customerId, customer, {new: true}).exec();
 },

  /**
   * summary: Удалить заказчика
   * description: Удалить заказчика с идентификатором customerId
   * parameters: 
   * produces: 
   * responses: 204, 400, 404
   */
  deleteCustomer: async function (customerId) {
    return Customer.findByIdAndDelete(customerId).exec();
  }

};
