# vue-login

## Dependencies
Using MEVN stacks.  
> [mongoDB](https://www.mongodb.com/)  

## Usage - local

#### frontend

###### Install
```
frontend$ npm install
```

###### Run
```
frontend$ npm run dev
```
> http://localhost:8080

###### Build
```
frontend$ npm run build
```

#### backend

###### Install
```
backend$ npm install
```

###### Run
```
backend$ npm start
```
> http://localhost:3000

#### DB

###### Start

```
vue-login$ mkdir db
vue-login$ mongod --dbpath ./db
```
> http://localhost:27017

###### Access
```
db$ mongo
```

###### Reset
```
> show dbs
> use opinion
> db.dropDatabase()
```
> change db name -> /backend/app.js

###### Check
```
> use opinion
> db.users.find()
```

## Usage - server

#### Install
```
~# git clone https://github.com/PJunhyuk/vue-login
```

#### Frontend
```
~/vue-login/frontend# npm install
~/vue-login/frontend# npm run build
```

#### DB
```
~/vue-login# mkdir db
~/vue-login# mongod --fork --logpath ./db/mongod.log --dbpath ./db
```

###### Access/Reset/Check
Same with `Usage - local`

#### Backend
```
~/vue-login/backend# npm install
~/vue-login/backend# forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www
```
> {server-url}:3000

###### Forever
```
~/vue-login/backend# forever list
~/vue-login/backend# forever stop 0
```

## Customize

#### Add/Remove question
You have to add/remove elements for MongoDB - Fix `userSchema` in `/backend/models/user.js`.  
You have to add/remove if-statement for express - Fix `/app/response` in `/backend/routes/users.js`.  
You have to change threshold for Vuejs - Fix `v-if` in `/frontend/src/components/main.vue`.  

## Dataset

MOLDIV > NATURAL > CREAM  
MOLDIV > NATURAL > LOVELY  

## Reference
[[Node.js] mongoDB , node.js, vue.js 를 통한 CURD(로그인, 회원가입)](https://m.blog.naver.com/kangminser88/221152151491)  
