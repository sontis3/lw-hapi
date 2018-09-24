'use strict';

const Boom = require('boom');
const dal = require('../../../data/mongoose/delivery-methods-db');
const automapper = require('automapper-ts');

automapper.createMap('ApiDeliveryMethod', 'DeliveryMethod')
  .forMember('name', opts => opts.mapFrom('name'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .ignoreAllNonExisting();

/**
 * Operations on /dir/delivery-methods/{deliveryMethodId}
 */
module.exports = {
    /**
     * summary: Получить документ по ID
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     */
    get: function getDeliveryMethod(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Изменить документ
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     */
    put: async function updateDeliveryMethod(request, h) {
      const id = request.params.deliveryMethodId;
      const deliveryMethod = request.payload;
      if (!deliveryMethod) {
        return Boom.badData('No Test Object request data');
      }
  
      const appModel = automapper.map('ApiDeliveryMethod', 'DeliveryMethod', deliveryMethod);
  
      let result = await dal.update(id, appModel)
        .then(dbResult => {
          if (dbResult === null) {
            return Boom.notFound(`Документ с id=${id} не найден!`);
          }
          return dbResult;
          // return h.response(dbResult).code(204);
        })
        .catch(err => {
          if (err.name === 'CastError') {
            return Boom.notFound(err.message);
          } else {
            return Boom.badRequest(err.message);
          }
        });
      return result;
      },
    /**
     * summary: Удалить документ
     * description: Удалить документ с идентификатором deliveryMethodId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     */
    delete: async function deleteDeliveryMethod(request, h) {
      const id = request.params.deliveryMethodId;
      let result = await dal.delete(id)
        .then(dbResult => {
          if (dbResult === null) {
            return Boom.notFound(`Документ с id=${id} не найден!`);
          }
          return dbResult;
          // return h.response(dbResult).code(204);
        })
        .catch(err => {
          if (err.name === 'CastError') {
            return Boom.notFound(err.message);
          } else {
            return Boom.badRequest(err.message);
          }
        });
      return result;
      }
};
