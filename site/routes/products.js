const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/',productsController.listar);
router.get('/detail/:id',productsController.detalle);

router.get('/create', productsController.crear);



module.exports = router;