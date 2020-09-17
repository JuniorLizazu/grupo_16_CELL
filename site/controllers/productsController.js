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
    },
    detalle: function(req, res){
        idProducto = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto
        })
        res.render('detailProductos',{
            title:"Detalle del Producto",
            css:"detalle.css",
            producto:producto[0]
        })
    },
    crear: function(req, res){
        res.render('cargaproducts',{
            title:"Carga de Productos",
            css:"cargaproducto.css",
        })
    }

}