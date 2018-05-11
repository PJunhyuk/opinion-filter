const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
});

// 이 유저가 신규 유저인지 phone_number 로 체크
router.post('/check', function(req, res, next) {
  // MongoDB에서 해당 핸드폰 번호 찾기
  User.findOne({phone_number: req.body.user.phone_number}, function(err, user){
    if(err) { // 구문 오류
      return res.status(500).json({error: err});
    }
    if(!user) { // 해당 유저 없음
      return res.status(404).json({error: 'user not found'});
    }
    res.json(user);
  })
});

// phone_number를 가지는 신규 유저 생성
router.post('/signUp', function (req, res, next) {
  const user = new User();

  user.phone_number = req.body.user.phone_number;
  user.status = 0;

  user.save(function(err) {
    if(err) {
      console.error(err);
      res.json({result: 0}); // 에러나면 0 리턴
      return;
    }
    res.json({result: 1}); // 정상적이면 1 리턴
  });
});

module.exports = router;
