const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

const UserPost = require('../controllers/post_controller') ;
console.log('Inside router')

router.get('/',homeController.home);

router.use('/users', require('./users'));
router.use('/posts', require('./posts'))

module.exports = router;