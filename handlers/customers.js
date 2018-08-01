'use strict';

const Boom = require('boom');
const contacts = require('../data/contacts.json');

/**
 * Operations on /customers
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     */
    get: function findCustomers(request, h) {
      return contacts;
      return Boom.notImplemented();
    },
    /**
     * summary: 
     * description: 
     * parameters: body
     * produces: 
     * responses: 201
     */
    post: function createCustomer(request, h) {
        return Boom.notImplemented();
    }
};
