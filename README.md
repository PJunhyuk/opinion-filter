# opinion-filter

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
opinion-filter$ mkdir db
opinion-filter$ mongod --dbpath ./db
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
~# git clone https://github.com/PJunhyuk/opinion-filter
```

#### Frontend
```
~/opinion-filter/frontend# npm install
~/opinion-filter/frontend# npm run build
```

#### DB
```
~/opinion-filter# mkdir db
~/opinion-filter# mongod --fork --logpath ./db/mongod.log --dbpath ./db
```

###### Access/Reset/Check
Same with `Usage - local`

#### Backend
```
~/opinion-filter/backend# npm install
~/opinion-filter/backend# forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www
```
> {server-url}

###### Forever
```
~/opinion-filter/backend# forever list
~/opinion-filter/backend# forever stop 0
```

## Customize

#### Add/Remove question
You have to add/remove elements for MongoDB - Fix `userSchema` in `/backend/models/user.js`.  
You have to add/remove if-statement for express - Fix `/app/response` in `/backend/routes/users.js`.  
You have to change threshold for Vuejs - Fix `v-if` in `/frontend/src/components/main.vue`.  

## Tested Assets

#### Filter

- Foodie > TR2  
- InstaSize > HULA  
- VSCO > C1
- MOLDIV > NATURAL > CREAM  

###### Not used

- VSCO > F2
- MOLDIV > NATURAL > LOVELY  
- Camera360 > Rosy  
- Original  

## Thanks to

###### Filter recommend

- 김윤
- 고은해
- 심윤지
- 최다은
- 박강민

###### Photo donation

- 이명성
- 곽소현
- 김민주
- 최다은
- 유영은
- 신채원
- 김재현96
- 김재현95
- 문현석
- 박여현
- 고은해

## Special Thanks to

###### TEAM OPINION

- 김현준  
- 이민우  
- 정종호  

###### ADVISOR

- 신채원
