var express = require('express');
var router = express.Router();
let cartController = require('../controllers/cartController');

/* GET home page. */
router.get('/', cartController.index);
router.get('/notregister', cartController.notregister);

module.exports = router;