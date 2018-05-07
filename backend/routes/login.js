const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
});

router.post('/signUp', function (req, res, next) {
  const user = new User();

  user.phone_number = req.body.user.phone_number;

  user.save(function(err) {
    if(err) {
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });
});

module.exports = router;
