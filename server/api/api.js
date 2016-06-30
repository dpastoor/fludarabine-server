var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/babies', require('./babies/babyRoute'));

module.exports = router;
