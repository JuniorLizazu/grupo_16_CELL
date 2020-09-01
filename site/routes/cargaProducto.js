var express = require('express');
var router = express.Router();
const cargaProductoController = require('../controllers/cargaProductoController')

/* GET home page. */
router.get('/', cargaProductoController.index);

module.exports = router;