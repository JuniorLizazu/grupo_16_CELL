var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController');

/* GET home page. */
router.get('/', registerController.register);
router.get('/notregister', registerController.notRegister);
router.get('/cartregister', registerController.registerCart);

module.exports = router;
