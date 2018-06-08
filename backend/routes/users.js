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
    if(user.status == 4) user.q_4 = req.body.user.checked;
    if(user.status == 5) user.q_5 = req.body.user.checked;
    if(user.status == 6) user.q_6 = req.body.user.checked;
    if(user.status == 7) user.q_7 = req.body.user.checked;
    if(user.status == 8) user.q_8 = req.body.user.checked;
    if(user.status == 9) user.q_9 = req.body.user.checked;
    if(user.status == 10) user.q_10 = req.body.user.checked;
    if(user.status == 11) user.q_11 = req.body.user.checked;
    if(user.status == 12) user.q_12 = req.body.user.checked;
    if(user.status == 13) user.q_13 = req.body.user.checked;
    if(user.status == 14) user.q_14 = req.body.user.checked;
    if(user.status == 15) user.q_15 = req.body.user.checked;
    if(user.status == 16) user.q_16 = req.body.user.checked;
    if(user.status == 17) user.q_17 = req.body.user.checked;
    if(user.status == 18) user.q_18 = req.body.user.checked;
    if(user.status == 19) user.q_19 = req.body.user.checked;
    if(user.status == 20) user.q_20 = req.body.user.checked;
    if(user.status == 21) user.q_21 = req.body.user.checked;
    if(user.status == 22) user.q_22 = req.body.user.checked;
    if(user.status == 23) user.q_23 = req.body.user.checked;
    if(user.status == 24) user.q_24 = req.body.user.checked;
    if(user.status == 25) user.q_25 = req.body.user.checked;
    if(user.status == 26) user.q_26 = req.body.user.checked;
    if(user.status == 27) user.q_27 = req.body.user.checked;
    if(user.status == 28) user.q_28 = req.body.user.checked;
    if(user.status == 29) user.q_29 = req.body.user.checked;
    if(user.status == 30) user.q_30 = req.body.user.checked;
    if(user.status == 31) user.q_31 = req.body.user.checked;
    if(user.status == 32) user.q_32 = req.body.user.checked;
    if(user.status == 33) user.q_33 = req.body.user.checked;
    if(user.status == 34) user.q_34 = req.body.user.checked;
    if(user.status == 35) user.q_35 = req.body.user.checked;
    if(user.status == 36) user.q_36 = req.body.user.checked;
    if(user.status == 37) user.q_37 = req.body.user.checked;
    if(user.status == 38) user.q_38 = req.body.user.checked;
    if(user.status == 39) user.q_39 = req.body.user.checked;
    if(user.status == 40) user.q_40 = req.body.user.checked;
    if(user.status == 41) user.q_41 = req.body.user.checked;
    if(user.status == 42) user.q_42 = req.body.user.checked;
    if(user.status == 43) user.q_43 = req.body.user.checked;
    if(user.status == 44) user.q_44 = req.body.user.checked;
    if(user.status == 45) user.q_45 = req.body.user.checked;
    if(user.status == 46) user.q_46 = req.body.user.checked;
    if(user.status == 47) user.q_47 = req.body.user.checked;
    if(user.status == 48) user.q_48 = req.body.user.checked;
    if(user.status == 49) user.q_49 = req.body.user.checked;
    if(user.status == 50) user.q_50 = req.body.user.checked;
    if(user.status == 51) user.q_51 = req.body.user.checked;
    if(user.status == 52) user.q_52 = req.body.user.checked;
    if(user.status == 53) user.q_53 = req.body.user.checked;
    if(user.status == 54) user.q_54 = req.body.user.checked;
    if(user.status == 55) user.q_55 = req.body.user.checked;
    if(user.status == 56) user.q_56 = req.body.user.checked;
    if(user.status == 57) user.q_57 = req.body.user.checked;
    if(user.status == 58) user.q_58 = req.body.user.checked;
    if(user.status == 59) user.q_59 = req.body.user.checked;
    if(user.status == 60) user.q_60 = req.body.user.checked;
    if(user.status == 61) user.q_61 = req.body.user.checked;
    if(user.status == 62) user.q_62 = req.body.user.checked;
    if(user.status == 63) user.q_63 = req.body.user.checked;
    if(user.status == 64) user.q_64 = req.body.user.checked;
    if(user.status == 65) user.q_65 = req.body.user.checked;
    if(user.status == 66) user.q_66 = req.body.user.checked;
    if(user.status == 67) user.q_67 = req.body.user.checked;
    if(user.status == 68) user.q_68 = req.body.user.checked;
    if(user.status == 69) user.q_69 = req.body.user.checked;
    if(user.status == 70) user.q_70 = req.body.user.checked;
    if(user.status == 71) user.q_71 = req.body.user.checked;
    if(user.status == 72) user.q_72 = req.body.user.checked;
    if(user.status == 73) user.q_73 = req.body.user.checked;
    if(user.status == 74) user.q_74 = req.body.user.checked;
    if(user.status == 75) user.q_75 = req.body.user.checked;
    if(user.status == 76) user.q_76 = req.body.user.checked;
    if(user.status == 77) user.q_77 = req.body.user.checked;
    if(user.status == 78) user.q_78 = req.body.user.checked;
    if(user.status == 79) user.q_79 = req.body.user.checked;
    if(user.status == 80) user.q_80 = req.body.user.checked;
    if(user.status == 81) user.q_81 = req.body.user.checked;
    if(user.status == 82) user.q_82 = req.body.user.checked;
    if(user.status == 83) user.q_83 = req.body.user.checked;
    if(user.status == 84) user.q_84 = req.body.user.checked;
    if(user.status == 85) user.q_85 = req.body.user.checked;
    if(user.status == 86) user.q_86 = req.body.user.checked;
    if(user.status == 87) user.q_87 = req.body.user.checked;
    if(user.status == 88) user.q_88 = req.body.user.checked;
    if(user.status == 89) user.q_89 = req.body.user.checked;
    if(user.status == 90) user.q_90 = req.body.user.checked;
    if(user.status == 91) user.q_91 = req.body.user.checked;
    if(user.status == 92) user.q_92 = req.body.user.checked;
    if(user.status == 93) user.q_93 = req.body.user.checked;
    if(user.status == 94) user.q_94 = req.body.user.checked;
    if(user.status == 95) user.q_95 = req.body.user.checked;
    if(user.status == 96) user.q_96 = req.body.user.checked;
    if(user.status == 97) user.q_97 = req.body.user.checked;
    if(user.status == 98) user.q_98 = req.body.user.checked;
    if(user.status == 99) user.q_99 = req.body.user.checked;
    if(user.status == 100) user.q_100 = req.body.user.checked;
    if(user.status == 101) user.q_101 = req.body.user.checked;
    if(user.status == 102) user.q_102 = req.body.user.checked;
    if(user.status == 103) user.q_103 = req.body.user.checked;
    if(user.status == 104) user.q_104 = req.body.user.checked;
    if(user.status == 105) user.q_105 = req.body.user.checked;
    if(user.status == 106) user.q_106 = req.body.user.checked;
    if(user.status == 107) user.q_107 = req.body.user.checked;
    if(user.status == 108) user.q_108 = req.body.user.checked;
    if(user.status == 109) user.q_109 = req.body.user.checked;
    if(user.status == 110) user.q_110 = req.body.user.checked;
    if(user.status == 111) user.q_111 = req.body.user.checked;
    if(user.status == 112) user.q_112 = req.body.user.checked;

    // 저장
    user.save(function(err){
        if(err) res.status(500).json({error: 'failed to update'});
        res.json({message: 'response updated'});
    });
  })
})
module.exports = router;
