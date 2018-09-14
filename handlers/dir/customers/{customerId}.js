'use strict';

const Boom = require('boom');
const customersDal = require('../../../data/mongoose/customers-db');
const automapper = require('automapper-ts');

automapper.createMap('ApiCustomer', 'Customer')
.forMember('name', opts => opts.mapFrom('name'))
.forMember('enabled', opts => opts.mapFrom('enabled'))
.ignoreAllNonExisting();


/**
 * Operations on /dir/customers/{customerId}
 */
module.exports = {
    /**
     * summary: Получить заказчика по ID
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     */
    get: async function getCustomer(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Изменить заказчика
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     */
    put: async function updateCustomer(request, h) {
      const customerId = request.params.customerId;
      const customer = request.payload;
      if (!customer) {
        return Boom.badData('No customer request data');
      }

      const dbCustomer = automapper.map('ApiCustomer', 'Customer', customer);

      let result = await customersDal.updateCustomer(customerId, dbCustomer)
        .then(dbResult => {
          if (dbResult === null) {
            return Boom.notFound(`Документ с id=${customerId} не найден!`);
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
     * summary: Удалить заказчика
     * description: Удалить заказчика с идентификатором customerId
     * parameters: 
     * produces: 
     * responses: 200, 400, 404
     */
    delete: async function deleteCustomer(request, h) {
      const customerId = request.params.customerId;
      let result = await customersDal.deleteCustomer(customerId)
        .then(dbResult => {
          if (dbResult === null) {
            return Boom.notFound(`Документ с id=${customerId} не найден!`);
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
