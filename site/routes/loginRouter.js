var express = require('express');
var router = express.Router();
let loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.login);
router.get('/enterpass', loginController.enterPass);
router.get('/social', loginController.social);

module.exports = router;
