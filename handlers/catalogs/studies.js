'use strict';

const Boom = require('boom');
const dal = require('../../data/mongoose/studies-db');
const automapper = require('automapper-ts');

automapper.createMap('Study', 'ApiStudy')
  .forMember('id', opts => opts.sourceObject['_id'].subProp)
  .forMember('studyNo', opts => opts.mapFrom('study_no'))
  .forMember('planYear', opts => opts.mapFrom('plan_year'))
  .forMember('customer', opts => opts.mapFrom('customer'))
  .forMember('test_object', opts => opts.mapFrom('test_object'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .forMember('dateCreated', opts => opts.sourceObject['date_created'].toLocaleString())
  .forMember('dateUpdated', opts => opts.sourceObject['date_updated'].toLocaleString())
  .forMember('__v', opts => opts.ignore())
  .ignoreAllNonExisting();

  automapper.createMap('ApiStudy', 'Study')
  .forMember('study_no', opts => opts.mapFrom('studyNo'))
  .forMember('plan_year', opts => opts.mapFrom('planYear'))
  .forMember('customer', opts => opts.mapFrom('customerId'))
  .forMember('test_object', opts => opts.mapFrom('test_objectId'))
  .forMember('enabled', opts => opts.mapFrom('enabled'))
  .ignoreAllNonExisting();

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
  get: async function findStudies(request, h) {
    const filter = request.query;
    let result = await dal.find(filter)
      .then(dbResult => { return automapper.map('Study', 'ApiStudy', dbResult); })
      .catch(err => { return Boom.badRequest(err.message); });
    return result;
  },
  /**
   * summary: Создать новое исследование
   * description: 
   * parameters: body
   * produces: 
   * responses: 201, 400, 422
   */
  post: async function createStudy(request, h) {
    const study = request.payload;
    if (!study) {
      return Boom.badData('No study request data');
    }

    if (!study.studyNo) {
      return Boom.badRequest('Number of study is required field');
    } else if (!study.planYear) {
      return Boom.badRequest('Year of study is required field');
    } else if (!study.customerId) {
      return Boom.badRequest('Customer of study is required field');
    } else if (!study.test_objectId) {
      return Boom.badRequest('Test object of study is required field');
    }

    const appModel = automapper.map('ApiStudy', 'Study', study);
    let result = await dal.create(appModel)
      .then(dbResult => { return h.response(automapper.map('Study', 'ApiStudy', dbResult)).code(201); })
      .catch(err => { return Boom.badRequest(err.message); });
    return result;
  }
};
