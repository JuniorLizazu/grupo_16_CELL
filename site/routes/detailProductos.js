const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController');

/* GET home page. */
router.get('/', detalleController.index);

module.exports = router;
