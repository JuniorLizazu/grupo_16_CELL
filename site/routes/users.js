var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersControllers')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator');

const upImagesUsers = require('../middlewares/upImagesUsers');
const huespedMiddleware = require('../middlewares/huespedMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

/* GET users listing. */
/*RUTAS DE REGISTRO */
router.get('/register', usersController.register);
router.post('/register',upImagesUsers.any(),registerValidator,usersController.processRegister);

/* RUTAS DE LOGUEO */
router.get('/login', usersController.login);
router.post('/login', loginValidator,usersController.processLogin);

/* RUTAS DE EDICION DE PERFIL */
router.get('/profile/:id',huespedMiddleware, usersController.profile);
router.put('/profile/:id',upImagesUsers.any(), usersController.editar);
router.delete('/eliminar/:id',usersController.eliminar)
/* LOGOUT Y LISTAD0 */
router.get('/logout',huespedMiddleware, usersController.logout);
router.get('/lista', adminMiddleware, usersController.listar);

module.exports = router;
