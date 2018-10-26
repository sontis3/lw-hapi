'use strict';

const Boom = require('boom');
const dal = require('../../data/mongoose/customers-db');
const automapper = require('automapper-ts');

automapper.createMap('Customer', 'ApiCustomer')
  .forMember('id', opts => opts.sourceObject['_id'].subProp)
  .forMember('name', opts => opts.mapFrom('name'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .forMember('dateCreated', opts => opts.sourceObject['date_created'].toLocaleString())
  .forMember('dateUpdated', opts => opts.sourceObject['date_updated'].toLocaleString())
  .forMember('__v', opts => opts.ignore())
  .ignoreAllNonExisting();

  automapper.createMap('ShortCustomer', 'ApiCustomer')
  .forMember('id', opts => opts.sourceObject['_id'].subProp)
  .forMember('name', opts => opts.mapFrom('name'))
  .ignoreAllNonExisting();

  automapper.createMap('ApiCustomer', 'Customer')
  .forMember('name', opts => opts.mapFrom('name'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .ignoreAllNonExisting();

/**
 * Operations on /dir/customers
 */
module.exports = {
  /**
   * summary: Получить список заказчиков исследований.
   * description: По умолчанию все заказчики.
Если имеется параметр enabled, то true - активные, false - неактивные.
Если имеется параметр short, то true - краткий ответ (имя, ид объекта), false - полный ответ (все поля).
   * parameters: enabled, short
   * produces: 
   * responses: 200, 400
   */
  get: async function findCustomers(request, h) {
    const filter = request.query;
    let result = await dal.find(filter)
      .then(dbResult => {
        if (filter.short !== true) {
          return automapper.map('Customer', 'ApiCustomer', dbResult); 
        } else {
          return automapper.map('ShortCustomer', 'ApiCustomer', dbResult);
        }
      })
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

    const appModel = automapper.map('ApiCustomer', 'Customer', customer);
    let result = await dal.create(appModel)
      .then(dbResult => { return h.response(dbResult).code(201); })
      .catch(err => { return Boom.badRequest(err.message); });
    return result;
  }
};
