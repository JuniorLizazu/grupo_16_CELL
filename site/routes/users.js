var express = require('express');
var router = express.Router();

/*REQUERIDO CONTROLADOR*/
const usersController = require('../controllers/usersControllers')

/*VALIDADORES */
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator');

/*MIDDLEWARES*/
const upImagesUsers = require('../middlewares/upImagesUsers');
const huespedMiddleware = require('../middlewares/huespedMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const visitaMiddleware = require('../middlewares/visitaMiddleware')

/* GET users listing. */
/*RUTAS DE REGISTRO */
router.get('/register',visitaMiddleware, usersController.register);
router.post('/register',upImagesUsers.any(),registerValidator,usersController.processRegister);

/* RUTAS DE LOGUEO */
router.get('/login',visitaMiddleware, usersController.login);
router.post('/login', loginValidator,usersController.processLogin);

/* RUTAS DE EDICION DE PERFIL */
router.get('/profile/:id',huespedMiddleware, usersController.profile);
router.put('/profile/:id',upImagesUsers.any(), usersController.editar);
router.delete('/delete/:id',huespedMiddleware,usersController.eliminar)
/* LOGOUT Y LISTAD0 */
router.get('/logout',huespedMiddleware, usersController.logout);
router.get('/lista', adminMiddleware, usersController.listar);

module.exports = router;
