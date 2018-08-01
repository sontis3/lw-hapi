'use strict';

const Test = require('tape');
const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Mockgen = require('../../data/mockgen.js');

/**
 * Test for /customers/{customerId}
 */
Test('/customers/{customerId}', function (t) {

    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     */
    t.test('test getCustomer get operation', async function (t) {

        const server = new Hapi.Server();

        await server.register({
            plugin: HapiOpenAPI,
            options: {
                api: Path.resolve(__dirname, '../../config/swagger.json'),
                handlers: Path.join(__dirname, '../../handlers'),
                outputvalidation: true
            }
        });

        const requests = new Promise((resolve, reject) => {
            Mockgen().requests({
                path: '/customers/{customerId}',
                operation: 'get'
            }, function (error, mock) {
                return error ? reject(error) : resolve(mock);
            });
        });

        const mock = await requests;

        t.ok(mock);
        t.ok(mock.request);
        //Get the resolved path from mock request
        //Mock request Path templates({}) are resolved using path parameters
        const options = {
            method: 'get',
            url: '/api' + mock.request.path
        };
        if (mock.request.body) {
            //Send the request body
            options.payload = mock.request.body;
        } else if (mock.request.formData) {
            //Send the request form data
            options.payload = mock.request.formData;
            //Set the Content-Type as application/x-www-form-urlencoded
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        // If headers are present, set the headers.
        if (mock.request.headers && mock.request.headers.length > 0) {
            options.headers = mock.request.headers;
        }

        const response = await server.inject(options);

        t.equal(response.statusCode, 200, 'Ok response status');
        t.end();

    });
    /**
     * summary: 
     * description: 
     * parameters: body
     * produces: 
     * responses: 200
     */
    t.test('test updateCustomer put operation', async function (t) {

        const server = new Hapi.Server();

        await server.register({
            plugin: HapiOpenAPI,
            options: {
                api: Path.resolve(__dirname, '../../config/swagger.json'),
                handlers: Path.join(__dirname, '../../handlers'),
                outputvalidation: true
            }
        });

        const requests = new Promise((resolve, reject) => {
            Mockgen().requests({
                path: '/customers/{customerId}',
                operation: 'put'
            }, function (error, mock) {
                return error ? reject(error) : resolve(mock);
            });
        });

        const mock = await requests;

        t.ok(mock);
        t.ok(mock.request);
        //Get the resolved path from mock request
        //Mock request Path templates({}) are resolved using path parameters
        const options = {
            method: 'put',
            url: '/api' + mock.request.path
        };
        if (mock.request.body) {
            //Send the request body
            options.payload = mock.request.body;
        } else if (mock.request.formData) {
            //Send the request form data
            options.payload = mock.request.formData;
            //Set the Content-Type as application/x-www-form-urlencoded
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        // If headers are present, set the headers.
        if (mock.request.headers && mock.request.headers.length > 0) {
            options.headers = mock.request.headers;
        }

        const response = await server.inject(options);

        t.equal(response.statusCode, 200, 'Ok response status');
        t.end();

    });
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 204
     */
    t.test('test deleteCustomer delete operation', async function (t) {

        const server = new Hapi.Server();

        await server.register({
            plugin: HapiOpenAPI,
            options: {
                api: Path.resolve(__dirname, '../../config/swagger.json'),
                handlers: Path.join(__dirname, '../../handlers'),
                outputvalidation: true
            }
        });

        const requests = new Promise((resolve, reject) => {
            Mockgen().requests({
                path: '/customers/{customerId}',
                operation: 'delete'
            }, function (error, mock) {
                return error ? reject(error) : resolve(mock);
            });
        });

        const mock = await requests;

        t.ok(mock);
        t.ok(mock.request);
        //Get the resolved path from mock request
        //Mock request Path templates({}) are resolved using path parameters
        const options = {
            method: 'delete',
            url: '/api' + mock.request.path
        };
        if (mock.request.body) {
            //Send the request body
            options.payload = mock.request.body;
        } else if (mock.request.formData) {
            //Send the request form data
            options.payload = mock.request.formData;
            //Set the Content-Type as application/x-www-form-urlencoded
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        // If headers are present, set the headers.
        if (mock.request.headers && mock.request.headers.length > 0) {
            options.headers = mock.request.headers;
        }

        const response = await server.inject(options);

        t.equal(response.statusCode, 204, 'Ok response status');
        t.end();

    });
    
});
