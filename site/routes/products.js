const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

const upImagesProducts = require('../middlewares/upImagesProducts')

/*Lista de productos y detalle*/
router.get('/',productsController.listar);
router.get('/detail/:id',productsController.detalle);


/* GET home page. */
router.get('/cart', productsController.carrito);

module.exports = router;