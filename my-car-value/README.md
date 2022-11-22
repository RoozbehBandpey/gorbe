# Used car pricing API

An API to figure out the price of a used car for selling. with following features:

1. User sign up with email/password
1. Users get an estimate for how much their car is worth based on year, make, model and milage
1. Users can report what they sold their vehicle for
1. Admins have to approve reported sales

## API Design

| Method and Route    | Body pr Query String                                         | Description                                  |
| ------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| `POST /auth/signup` | `Body - { email, password }`                                 | Create a new user and sign in                |
| `POST /auth/signin` | `Body - { email, password }`                                 | Sign in as an existing user                  |
| `GET /report`       | `QS make, model, year, mileage, longitude, latitude`         | Get an estimate for the car's value          |
| `POST /report`      | `Body - { make, model, year, mileage, longitude, latitude }` | Report how much a vehicle sold for           |
| `PATCH /report`     | `Body - { approved }`                                        | Approve or reject a report submitted by user |

## Dev Database

TypeOrm with SQLite

```bash
$ npm install @nestjs/typeorm typeorm sqlite3
```

## Prod Database

TypeORM with Postgres

```bash
$ npm install @nestjs/typeorm typeorm
```

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

You can dramatically speed up your tests by updating the package.json file.

In the scripts section, find the following line:

```json
"test:watch": "jest --watch",
```

And change it to:

```json
"test:watch": "jest --watch --maxWorkers=1",
```

Restart your test runner at your terminal after making this change
