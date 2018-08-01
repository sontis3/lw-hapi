'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: findCustomers
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/customers',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: body
     * produces: 
     * responses: 201
     * operationId: createCustomer
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/customers',
                operation: 'post',
                response: '201'
            }, callback);
        }
    }
};
