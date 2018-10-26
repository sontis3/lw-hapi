'use strict';

const Test = require('tape');
const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Mockgen = require('../../data/mockgen.js');

/**
 * Test for /dir/customers
 */
Test('/dir/customers', function (t) {

    /**
     * summary: Получить список заказчиков исследований.
     * description: По умолчанию все заказчики.
Если имеется параметр enabled, то true - активные, false - неактивные.
Если имеется параметр short, то true - краткий ответ (имя, ид объекта), false - полный ответ (все поля).
     * parameters: enabled, short
     * produces: 
     * responses: 200, 400
     */
    t.test('test findCustomers get operation', async function (t) {

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
                path: '/dir/customers',
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
     * summary: Создать нового заказчика
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 400, 422
     */
    t.test('test createCustomer post operation', async function (t) {

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
                path: '/dir/customers',
                operation: 'post'
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
            method: 'post',
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

        t.equal(response.statusCode, 201, 'Ok response status');
        t.end();

    });
    
});
