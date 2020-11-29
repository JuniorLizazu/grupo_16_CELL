const path = require('path');
const Sequelize = require('sequelize');
const db = require('../database/models');
let Op = Sequelize.Op;

module.exports = {
    index: function(req, res){
        let trademark = db.Trademark.findAll();
        
        let producto = db.Products.findAll();
        

        Promise.all([trademark, producto])

        .then(([trademark, producto])=>{
            res.render('index', { 
                title: 'Cell',
                css: 'home.css',
                trademark: trademark,
                producto: producto
                
            })
        })
        .catch(error=>{
            res.send(error)
        })
    },
    contacto: function(req, res){
            res.render('contacto', { 
                title: 'Contáctanos',
                css: 'contacto.css'
            })
        },
    empresa: function (req,res){
            res.render('empresa',{
                title:'Empresa',
                css: 'empresa.css'
            })
        },
    search: function(req, res, next){
        db.Products.findAll({
            where:{
                [Op.or]: [
                    { name :{[Op.like] : `%${req.query.search}%` }},
                    { model :{[Op.like] : `%${req.query.search}%` }}
                 ]
             }
         })
        .then(resultado => {
            res.render('search',{
            title: 'Cell',
            css: 'home.css',
            products: resultado
        })
        })
        .catch(e => {
            res.send(e)
        })
    },
    locales: function (req,res){
        res.render('locales',{
            title:'Locales',
            css: 'locales.css'
        })
    },
}