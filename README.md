# vue-login

## Usage

### frontend

#### Build
```
frontend$ npm run build
```

#### Run
```
frontend$ npm run dev
```
> http://localhost:8080

### backend

#### Run
```
backend$ DEBUG=backend:* npm start
backend$ npm start
```
> http://localhost:3000

### DB

#### Start
```
vue-login$ mongod --dbpath ./db
```
> http://localhost:27017

#### Access
```
db$ mongo
```

##### Reset
```
> show dbs
> use opinion
> db.dropDatabase()
```
> change db name -> /backend/app.js

##### Check
```
> use opinion
> db.users.find()
```
