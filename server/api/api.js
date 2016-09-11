import Router from 'express';
import babyRoute from './babies/babyRoute'
// api router will mount other routers
// for all our resources
let router = Router();

router.use('/babies', babyRoute);

export default router
