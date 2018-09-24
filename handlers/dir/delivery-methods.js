'use strict';

const Boom = require('boom');
const dal = require('../../data/mongoose/delivery-methods-db');
const automapper = require('automapper-ts');

automapper.createMap('DeliveryMethod', 'ApiDeliveryMethod')
  .forMember('id', opts => opts.sourceObject['_id'].subProp)
  .forMember('name', opts => opts.mapFrom('name'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .forMember('dateCreated', opts => opts.sourceObject['date_created'].toLocaleString())
  .forMember('dateUpdated', opts => opts.sourceObject['date_updated'].toLocaleString())
  .forMember('__v', opts => opts.ignore())
  .ignoreAllNonExisting();

  automapper.createMap('ApiDeliveryMethod', 'DeliveryMethod')
  .forMember('name', opts => opts.mapFrom('name'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .ignoreAllNonExisting();

  /**
 * Operations on /dir/delivery-methods
 */
module.exports = {
    /**
     * summary: Получить список способов доставки.
     * description: По умолчанию все документы.
Если имеется параметр enabled, то true - активные, false - неактивные
     * parameters: enabled
     * produces: 
     * responses: 200, 400
     */
    get: async function findDeliveryMethods(request, h) {
      const filter = request.query;
      let result = await dal.find(filter)
        .then(dbResult => { return automapper.map('DeliveryMethod', 'ApiDeliveryMethod', dbResult); })
        .catch(err => { return Boom.badRequest(err.message); });
      return result;
      },
    /**
     * summary: Создать новый документ
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     */
    post: async function createDeliveryMethod(request, h) {
      const deliveryMethod = request.payload;
      if (!deliveryMethod) {
        return Boom.badData('No DeliveryMethod request data');
      }
  
      if (!deliveryMethod.name) {
        return Boom.badRequest('Name is required field');
      }
  
      const appModel = automapper.map('ApiDeliveryMethod', 'DeliveryMethod', deliveryMethod);
      let result = await dal.create(appModel)
        .then(dbResult => { return h.response(dbResult).code(201); })
        .catch(err => { return Boom.badRequest(err.message); });
      return result;
    }
};
