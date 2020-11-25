var express = require('express');
var router = express.Router();

let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);
router.get('/contacto', mainController.contacto);
router.get('/locales', mainController.locales);
router.get('/empresa', mainController.empresa);
router.get('/search',  mainController.search);
module.exports = router;
