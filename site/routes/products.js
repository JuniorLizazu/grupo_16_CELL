const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

const upImagesProducts = require('../middlewares/upImagesProducts')
const huespedMiddleware = require('../middlewares/huespedMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const productsValidator = require('../validations/productsValidator');
const productEditValidator = require('../validations/productEditValidator');


/*Lista de productos y detalle*/
router.get('/',huespedMiddleware,productsController.listar);
router.get('/detail/:id',productsController.detalle);


/* GET home page. */
router.get('/cart', huespedMiddleware, productsController.carrito);
router.get('/category/:id',productsController.category);

/*Crear producto*/ 
router.get('/create',adminMiddleware, productsController.crear);
router.post('/create', upImagesProducts.any(),productsValidator, productsController.agregar);

/*Vista del edit y eliminar*/
router.get('/admin', huespedMiddleware, productsController.show)
router.get('/edit/:id', adminMiddleware, productsController.formulario)
router.put('/edit/:id',upImagesProducts.any(),productEditValidator, productsController.editar)
/* Eliminar producto */
router.delete('/delete/:id', productsController.eliminar);


module.exports = router;