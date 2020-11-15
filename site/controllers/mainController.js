const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const db = require('../database/models')

module.exports = {
    index: function(req, res){
        db.Products.findAll({
            include : [
                {
                    association: 'trademark'
                }
            ]
        })

        .then(producto=>{
            res.render('index', { 
                title: 'Cell',
                css: 'home.css',
                producto: producto,
                trademark: producto.trademark
            })
        })
        .catch(error=>{
            res.send(error)
        })
        
    }
}