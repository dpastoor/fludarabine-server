import {Router} from 'express';
import logger from '../../util/logger';
var fixtures = {
  babies: ["John", "Jane"]
};

Router().route('/')
  .get((req, res, next) => {
    console.log('received request');
    res.json(fixtures);
    next();
  })

export default Router;
