# User store API
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
`sls deploy`