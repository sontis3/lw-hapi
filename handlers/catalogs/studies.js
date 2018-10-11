'use strict';

const Boom = require('boom');

/**
 * Operations on /catalogs/studies
 */
module.exports = {
  /**
   * summary: Получить список исследований.
   * description: По умолчанию все исследования.
Если имеется параметр enabled, то true - активные, false - неактивные
   * parameters: enabled, year
   * produces: 
   * responses: 200, 400
   */
  get: function findStudies(request, h) {
    const params = request.query;
    return Boom.notImplemented();
  },
  /**
   * summary: Создать новое исследование
   * description: 
   * parameters: body
   * produces: 
   * responses: 201, 400, 422
   */
  post: function createStudy(request, h) {
    return Boom.notImplemented();
  }
};
