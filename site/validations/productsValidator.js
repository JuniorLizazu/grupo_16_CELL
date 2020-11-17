const {check,body} = require('express-validator');
const db = require('../database/models');

module.exports = [

    check('name')
    .isLength({
        min:5
    })
    .withMessage('El nombre del producto es obligatorio'),

    check('model')
    .isLength({
        min:1
    })
    .withMessage('Indicar el modelo del celular (Ej: Samsung J2, el modelo es J2)'),

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

    body('image')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("Tiene que subir una imagen"),

    check('description')
    .isLength({
        min:20
    })
    .withMessage('La descripcion del producto es obligatoria'),

    check('trademark')
    .isLength({
        min:1
    })
    .withMessage('La categoria del producto es obligatoria')

]
