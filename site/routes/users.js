var express = require('express');
var router = express.Router();
let userController = require('../controllers/usersControllers');
/* GET users listing. */

router.get('/', userController.register);
router.get('/social', userController.social);
router.get('/entercode', userController.enterCode);


router.get('/notregister', userController.notregister);

router.get('/login', userController.login);
router.get('/social', userController.social);
module.exports = router;