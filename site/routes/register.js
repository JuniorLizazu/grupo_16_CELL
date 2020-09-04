var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController');

/* GET home page. */
router.get('/', registerController.index);

module.exports = router;
