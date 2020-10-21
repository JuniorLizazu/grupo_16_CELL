var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersControllers')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator');

const upImagesUsers = require('../middlewares/upImagesUsers')
const huespedMiddleware = require('../middlewares/huespedMiddleware');

/* GET users listing. */


router.get('/register', usersController.register);
router.post('/register',upImagesUsers.any(),registerValidator,usersController.processRegister);

router.get('/login', usersController.login);
router.post('/login', loginValidator,usersController.processLogin);

router.get('/profile',huespedMiddleware, usersController.profile);

router.get('/logout', usersController.logout);
/*router.get('/', loginController.login);
router.get('/enterpass', loginController.enterPass);
router.get('/social', loginController.social)*/


module.exports = router;