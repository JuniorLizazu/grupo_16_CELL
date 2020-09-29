var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersControllers');

const upImagesUsers = require('../middlewares/upImagesUsers')

/* GET users listing. */


router.get('/register', usersController.register);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

/*router.get('/', loginController.login);
router.get('/enterpass', loginController.enterPass);
router.get('/social', loginController.social)*/


module.exports = router;