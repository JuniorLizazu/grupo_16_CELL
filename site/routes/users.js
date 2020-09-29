var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersControllers');

const upImagesUsers = require('../middlewares/upImagesUsers')

/* GET users listing. */


router.get('/register', usersController.register);



module.exports = router;