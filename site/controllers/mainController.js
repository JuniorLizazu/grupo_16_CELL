const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const db = require('../database/models')

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
        }
}