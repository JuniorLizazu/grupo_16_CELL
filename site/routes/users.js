var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersControllers')

const upImagesUsers = require('../middlewares/upImagesUsers')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator');

/* GET users listing. */


router.get('/register', usersController.register);
router.post('/register',upImagesUsers.any(),registerValidator,usersController.processRegister);

router.get('/login', usersController.login);
router.post('/login', loginValidator,usersController.processLogin);

/*router.get('/', loginController.login);
router.get('/enterpass', loginController.enterPass);
router.get('/social', loginController.social)*/


module.exports = router;