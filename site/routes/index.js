var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index)
module.exports = router;
