# Description

Store and retrieve messages stored in a plain json file

Three routes:

- To list all messages that are ever save
- To retrieve message by its ID
- To create a message

## Nest classes

Nest has following capabilities that let us handle requests

![](/messages/design/messages.drawio.png)

we need following capabilities for our routes:

- List all messages with `GET` to `localhost:3000/messages` we don't have to be authenticated and we don't send data so we only need
  - Controller
  - Service
  - Repository
- Create a message with `POST` to `localhost:3000/messages` and body of `{ "content": "Hi There" }` we have incoming data
  - Pipe
  - Controller
  - Service
  - Repository
- Retrieve message by its ID with `GET` to `localhost:3000/messages/:id`
  - Controller
  - Service
  - Repository

With all of this we also ned a `Module` to wrap things up together.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deactivate ES Lint

Go to `.eslintrc.js` and comment out the entire object body

## Generate Module with nest

```bash
nest generate module messages
```
