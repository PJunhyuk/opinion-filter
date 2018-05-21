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

  user.save(function(err) {
    if(err) {
      console.error(err);
      res.json({result: 0}); // 에러나면 0 리턴
      return;
    }
    res.json({result: 1}); // 정상적이면 1 리턴
  });
});

// User 의 정보를 가져오자
router.get('/get_info', function (req, res, next) {
  User.find(function(err, users) {
    res.json(users);
  })
});

// phone_number 에 해당하는 User의 정보를 가져오자
router.get('/get_info/:phone_number', function(req, res) {
  User.findOne({phone_number: req.params.phone_number}, function(err, user) {
    if(err) return res.status(500).json({error: err});
    if(!user) return res.status(404).json({error: 'user not found'});
    res.json(user);
  })
})

// user_id 에 해당하는 User의 정보를 가져오자
router.get('/get_info_id/:user_id', function(req, res) {
  User.findOne({_id: req.params.user_id}, function(err, user) {
    if(err) return res.status(500).json({error: err});
    if(!user) return res.status(404).json({error: 'user not found'});
    res.json(user);
  })
})

router.post('/status_up', function (req, res, next) {
  // MongoDB에서 해당 핸드폰 번호 찾기
  User.findOne({phone_number: req.body.user.phone_number}, function(err, user){
    // 해당 유저의 status 업데이트
    user.status++;

    // 저장
    user.save(function(err){
        if(err) res.status(500).json({error: 'failed to update'});
        res.json({message: 'status updated'});
    });
  })
})

// response 업데이트
router.post('/response', function (req, res, next) {
  // MongoDB에서 해당 User를 phone_number로 찾기
  User.findOne({phone_number: req.body.user.phone_number}, function(err, user) {
    if(user.status == 1) user.q_1 = req.body.user.checked;
    if(user.status == 2) user.q_2 = req.body.user.checked;
    if(user.status == 3) user.q_3 = req.body.user.checked;

    // 저장
    user.save(function(err){
        if(err) res.status(500).json({error: 'failed to update'});
        res.json({message: 'response updated'});
    });
  })
})
module.exports = router;
