const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs');


module.exports = {
    listar: function(req, res){
        res.render('products',{
            title: "Productos",
            css:"home.css",
            productos: dbProducts
        })
    }
}