const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs');

module.exports = {
    listar: function(req, res){
        res.render('products',{
            title: "Productos",
            css:"products.css",
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
    carrito: function(req, res) {
        res.render('cart', { 
            title: 'Carrito de compras',
            css: 'cart.css',
        });
    },
    notregister: function(req, res) {
        res.render('notRegister', { 
            title: '¡Hola! Para agregar al carrito, Ingresá a tu cuenta',
            css: 'notRegister.css',
        });
    }
}