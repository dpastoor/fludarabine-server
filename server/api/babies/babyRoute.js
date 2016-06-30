var router = require('express').Router();
var logger = require('../../util/logger');
var moment = require('moment');
var fixtures = {
  babies: ["John", "Jane"]
};

router.route('/')
  .get(function(req, res, next) {
    console.log('received request');
    res.json(fixtures);
    next();
  })

module.exports = router;
