var express = require('express');
var router = express.Router();

const { logout,login }=require('../controller/index');
// router.post('/createRole',createRole)
router.post('/login',login)
router.post('/logout', logout);

module.exports = router;
