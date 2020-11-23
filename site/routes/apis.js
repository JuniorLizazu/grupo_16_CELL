const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController')

router.post('/email', apiController.email)


module.exports = router