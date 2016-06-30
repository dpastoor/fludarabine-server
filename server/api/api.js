var router = require('express').Router();
import babyRoute from './babies/babyRoute'
// api router will mount other routers
// for all our resources
router.use('/babies', babyRoute);

module.exports = router;
