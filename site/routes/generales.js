var express = require('express');
var router = express.Router();
let generalesControllers = require('../controllers/generalesControllers');

/*Lista de productos y detalle*/
router.get('/',generalesControllers.listar);
router.get('/detail/:id',generalesControllers.detalle);
/* GET home page. */
router.get('/cart', generalesControllers.carrito);
router.get('/notregister', generalesControllers.notregister);


module.exports = router;