'use strict';

const Boom = require('boom');
const dal = require('../../../data/mongoose/test-objects-db');
const automapper = require('automapper-ts');

automapper.createMap('ApiTestObject', 'TestObject')
  .forMember('name', opts => opts.mapFrom('name'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .ignoreAllNonExisting();

/**
 * Operations on /dir/test-objects/{testObjectId}
 */
module.exports = {
  /**
   * summary: Получить документ по ID
   * description: 
   * parameters: 
   * produces: 
   * responses: 200, 400, 404
   */
  get: async function getTestObject(request, h) {
    return Boom.notImplemented();
  },
  /**
   * summary: Изменить документ
   * description: 
   * parameters: body
   * produces: 
   * responses: 200, 400, 404
   */
  put: async function updateTestObject(request, h) {
    const id = request.params.testObjectId;
    const testObject = request.payload;
    if (!testObject) {
      return Boom.badData('No Test Object request data');
    }

    const appModel = automapper.map('ApiTestObject', 'TestObject', testObject);

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
   * description: Удалить документ с идентификатором testObjectId
   * parameters: 
   * produces: 
   * responses: 200, 400, 404
   */
  delete: async function deleteTestObject(request, h) {
    const id = request.params.testObjectId;
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
