'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /dir/customers/{customerId}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: getCustomer
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
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
     * responses: 200
     * operationId: updateCustomer
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 204
     * operationId: deleteCustomer
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/dir/customers/{customerId}',
                operation: 'delete',
                response: '204'
            }, callback);
        }
    }
};
