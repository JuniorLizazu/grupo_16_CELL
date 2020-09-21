const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/', adminController.show)
/*Crear producto*/ 
router.get('/create', adminController.crear);
router.post('/create', adminController.agregar);

/*Vista del edit y eliminar*/
router.get('/show/:id/:flap?',adminController.showEdit);
router.put('/edit/:id', adminController.editar)
/* Eliminar producto */



module.exports = router; 