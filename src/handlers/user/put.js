'use strict';

const { UserRepository } = require('../../repositories/user.repository');
const dynamo = require('../../dynamodb.factory')
const userRepository = new UserRepository(dynamo)

exports.handler = async(event, context) => {
    let item
    try {
        item = JSON.parse(event.body)
    } catch (err) {
        console.log(`Unable to parse event ${JSON.stringify(event)}`);
        console.log(err);
        return {
            statusCode: 400,
            body: { "message": "Body supplied is not JSON data" }
        };
    }
    try {
        const response = await userRepository.put({ id: event.pathParameters.id, content: item });
        return {
            statusCode: response ? 200 : 201,
            body: item,
        };
    } catch (err) {
        console.log(`Error PUTting event ${JSON.stringify(event)}`);
        if (!err.statusCode) { console.log(err); }
        return {
            statusCode: err.statusCode || 500,
            body: err
        };
    }
};