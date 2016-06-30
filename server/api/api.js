import Router from 'express';
import babyRoute from './babies/babyRoute'
// api router will mount other routers
// for all our resources
Router().use('/babies', babyRoute);

export default Router
