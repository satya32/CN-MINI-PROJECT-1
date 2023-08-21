const express = require('express');

const router = express.Router();

const userPost =  require('../controllers/post_controller');

router.get('/posts',userPost.post );

module.exports = router;