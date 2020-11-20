const {check,body} = require('express-validator');
const db = require('../database/models');


module.exports = [

    check('colors')
    .isLength({
        min:1
    }).withMessage('Indique el color/es del producto'),


    check('discount')
    .isInt({
        min:1
    }).withMessage('Si el descuento es nulo poner 0'),

    check('price')
    .isInt({
        min:1
    }).withMessage('El producto debe tener un precio válido'),

    check('capacidad')
    .isLength({
        min:1
    }).withMessage('Indique la capacidad del producto'),

    check('description')
    .isLength({
        min:20
    }).withMessage('La descripcion debe tener al menos 20 caracteres')

]
