var express = require('express');
const upImagesUsers = require('../../diseño/middlewares/upImagesUsers');
var router = express.Router();

const usersController = require('../controllers/usersControllers');

const upImagesUsers = require('../middlewares/upImagesUsers')

/* GET users listing. */


router.get('/register', usersController.register);
router.post('/register', upImagesUsers.any(),usersController.processRegister);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/social', userController.social);
router.get('/entercode', userController.enterCode);




router.get('/notregister', userController.notregister);

router.get('/login', userController.login);
router.get('/social', userController.social);
module.exports = router;