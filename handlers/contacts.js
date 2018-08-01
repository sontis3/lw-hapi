'use strict';

const Boom = require('boom');
const contacts = require('../data/contacts.json');
// const contacts = require('../data/contacts')

/**
 * Operations on /contacts
 */
module.exports = {
  /**
   * summary: 
   * description: 
   * parameters: 
   * produces: application/json, text/json
   * responses: 200
   */
  get: async function contacts_get(request, h) {
    // const requests = new Promise((resolve, reject) => {
    //   contacts.get["200"](request, h, function (error, mock) {
    //     return error ? reject(error) : resolve(mock);
    //   });
    // });
    // const mock = await requests;
    // return mock;
    return contacts;
    // return Boom.notImplemented();
  }
};
