'use strict';

const Boom = require('boom');

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
    get: function getCustomer(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Изменить заказчика
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, 400, 404
     */
    put: function updateCustomer(request, h) {
        return Boom.notImplemented();
    },
    /**
     * summary: Удалить заказчика
     * description: Удалить заказчика с идентификатором customerId
     * parameters: 
     * produces: 
     * responses: 204, 400, 404
     */
    delete: function deleteCustomer(request, h) {
        return Boom.notImplemented();
    }
};
