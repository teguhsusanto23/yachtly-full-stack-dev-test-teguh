# yachtly-full-stack-dev-test-teguh
fullstack programmer test on dploy
DATABASE
- create database postgres

API
inside to api folder
- npm install
- npm run start:dev

DATABASE CONFIG
api/server/config/config.json
{
  "development": {
    "username": "<your username>",
    "password": "<your password>",
    "database": "<your database>",
    "host": "127.0.0.1",
	"port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "<your username>",
    "password": "<your password>",
    "database": "<your database>",
    "host": "127.0.0.1",
	"port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "<your username>",
    "password": "<your password>",
    "database": "<your database>",
    "host": "127.0.0.1",
	"port": 5432,
    "dialect": "postgres"
  }
}

- sequelize db:migrate
- open postman and put this url http://localhost:8000/api/users
GET http://localhost:8000/api/users ---for show all data
GET http://localhost:8000/api/users/1 --- for show single data by user id
POST http://localhost:8000/api/users --for insert add new user
PUT http://localhost:8000/api/users/1 --for update data
DELETE http://localhost:8000/api/users/1 --for delete data



FRONT
inside to front folder
- npm install
- ng server
- open brwoser and put this url : http://localhost:4200/users

