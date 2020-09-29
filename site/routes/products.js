const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

const upImagesProducts = require('../middlewares/upImagesProducts')

/*Lista de productos y detalle*/
router.get('/',productsController.listar);
router.get('/detail/:id',productsController.detalle);


/* GET home page. */
router.get('/cart', productsController.carrito);

router.get('/admin', productsController.show)
/*Crear producto*/ 
router.get('/create', productsController.crear);
router.post('/create', productsController.agregar);

/*Vista del edit y eliminar*/
router.get('/show/:id/:flap?',productsController.showEdit);
router.put('/edit/:id', productsController.editar)
/* Eliminar producto */
router.delete('/delete/:id', productsController.eliminar);


module.exports = router;