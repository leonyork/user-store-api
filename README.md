# User store API

![Build status](https://s3.amazonaws.com/lambci-user-store-buildresults-15lloh32shdpg/gh/leonyork/user-store-api/branches/master/568b5107c2846bee412acb58ecd38215.svg)

Provides an API for storing user data in dynamo db. Only provides a PUT and a GET to allow you to add/update and get a user. Data held against the user is any JSON.

### GET /user/{id}
 - If the user exists, responds with status code 200 and the information about the user
 - If the user doesn't exist, responds with 404.

### PUT /user/{id}
 - If the user exists, responds with status code 200 and the information that was stored
 - If the user doesn't exist, responds with status code 201 and the information that was stored

## Installation
You'll need to have [NPM](https://www.npmjs.com/) the [Serverless Framework](https://serverless.com/) installed.

- To install NPM, you'll need to download it from https://www.npmjs.com/get-npm
- Once NPM is installed you can run `npm install -g serverless` to install the Serverless Framework
- Now run `npm install` to install the required packages for this application

## Local
`sls offline start`

To test:

```bash
curl -X GET http://localhost:3000/user/100
curl -X PUT http://localhost:3000/user/100 -d '{"name": "Alice"}'
curl -X GET http://localhost:3000/user/100
curl -X PUT http://localhost:3000/user/100 -d '{"name": "Bob"}'
curl -X GET http://localhost:3000/user/100
```

## Deploy

To deploy development run `sls deploy`

To deploy production run `sls deploy -s production`

## Tests

Run all tests with `npm run test`

### Unit Tests

In the `.test.` files alongside the source. Run with `npm run unit`

### Integration Tests

In the `test/integration` folder. Run with `npm run integration`

## CI/CD

Uses [LambCI](https://github.com/lambci/lambci) to build on a push to GitHub. As part of the build, we'll run the tests against a functions and database created in the cloud.

If all is successful, deploys to production.