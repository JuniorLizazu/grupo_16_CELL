var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController');

/* GET home page. */
router.get('/', registerController.register);
router.get('/social', registerController.social);
router.get('/entercode', registerController.enterCode);
router.get('/registercart', registerController.registerCart);

module.exports = router;
