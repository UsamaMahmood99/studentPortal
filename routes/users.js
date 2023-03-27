var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config.json');

async function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

const { createUser,
  getUser,
  updateUser,
  removeUser,
  getUserById } = require('../controller/index');


router.post('/createUser',createUser)
router.get('/getUser', authenticateToken ,getUser)
router.put('/updateUser',updateUser)
router.delete('/removeUser',removeUser)
router.get('/getUserById',getUserById)
module.exports = router;