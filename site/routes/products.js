var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllers');

/*Lista de productos y detalle*/
router.get('/',productsController.listar);
router.get('/detail/:id',productsController.detalle);
/* GET home page. */
router.get('/cart', productsController.carrito);

module.exports = router;