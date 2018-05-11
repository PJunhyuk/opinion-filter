# vue-login

## Install
Install [mongoDB](https://www.mongodb.com/).

## Usage

### frontend

#### Install
```
frontend$ npm install
```

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

#### Install
```
backend$ npm install
```

#### Run
```
backend$ npm start
```
or
```
backend$ DEBUG=backend:* npm start
```
> http://localhost:3000

### DB

#### Start

```
vue-login$ mkdir db
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

## Reference
[[Node.js] mongoDB , node.js, vue.js 를 통한 CURD(로그인, 회원가입)](https://m.blog.naver.com/kangminser88/221152151491)  
