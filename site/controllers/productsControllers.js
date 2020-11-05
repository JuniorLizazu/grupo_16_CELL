const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const fs = require('fs');

// Requiero la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = sequelize.Op;

module.exports = {
    listar:function(req,res){
        //recorro la base de datos "productos, y envio todos los productos a su ruta"
        db.Products.findAll()
            .then(producto =>{
                res.render('products',{
                 title: 'Productos',
                 css: 'products.css',
                 products: producto
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    /*MUESTRO EL DETALLE DEL PRODUCTO*/
    detalle:function(req,res){
        //busco en la base de datos el id del producto seleccionado.
        db.Products.findOne({
            where: {
                     id : req.params.id
            },
            include : [
                {
                    association: 'trademark'
                }
            ]
    })
            .then(producto =>{
                res.render("detailProductos",{
                    title: "Detalle del producto",
                    css: "detalle.css",
                    producto: producto,
                    trademark: producto.trademark
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    carrito: function(req, res) {
        res.render('cart', { 
            title: 'Carrito de compras',
            css: 'cart.css',
        });
    },
    show: function(req, res){
        res.render('show',{
            title: "Productos",
            css:"products.css",
            productos: dbProducts
        })
    },
    crear: function(req,res){
        //guardo los nombres en subCategorias para despues mostrarlos y ordenar el nombre alfabeticamente.
        let trademark = db.Trademark.findAll({
            order: [
                ['name','ASC']
            ]
        })
        .then(trademark =>{
            res.render('cargaproducts',{
                title:"Cargar producto",
                css: "cargaproducto.css",
                trademark: trademark
            })
        })
    },
    agregar: function(req,res){
        //si no hay errores, entra y crea el nuevo producto
            db.Products.create({
                name: req.body.name,
                model: req.body.model,
                price: Number(req.body.price),
                colors: req.body.colors,
                company: req.body.company,
                discount:  Number(req.body.discount),
                dualsim:  req.body.dualsim,
                capacidad:  Number(req.body.capacidad),
                image: (req.files[0])?req.files[0].filename:"default.png",
                id_trademark: req.body.trademark
            })
            //redirecciono a productos para mostrar todos los productos, incluyendo el nuevo.
            .then(()=>{
                return res.redirect('/products')
            })
        
    },
    showEdit:function(req,res){
        let idProducto = req.params.id;
        let flap = req.params.flap;
        let activeDetail;
        let activeEdit;
        let showDetail;
        let showEdit;
 
        if(flap=="show"){
            activeDetail = 'active';
            showDetail = 'show';
        }else{
            activeEdit = 'active';
            showEdit = 'show';
        }
        let resultado = dbProducts.filter(producto =>{
            return producto.id == idProducto
        })
        res.render('vistaProducto',{
            title: 'Ver / Editar',
            css: 'vistaProducto.css',
            total: dbProducts.length,
            producto:resultado[0],
            activeDetail: activeDetail,
            activeEdit:activeEdit,
            showDetail: showDetail,
            showEdit:showEdit,
        })
    },
    editar: function(req,res){
        let idProducto = req.params.id;
        dbProducts.forEach(producto => {
            if(producto.id == idProducto){
                producto.id = Number(req.body.id),
                producto.nombre = req.body.name,
                producto.trademark = req.body.marca,
                producto.model = req.body.modelo,
                producto.price = Number(req.body.price),
                producto.discount = Number(req.body.discount),
                producto.colors = req.body.colors,
                producto.company = req.body.company,
                producto.image = producto.image
            }
        })
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts),'utf-8');
        res.redirect('/products/show/'+ idProducto +'/show')
    },
    eliminar:function(req,res){
        let idProducto = req.params.id;
        dbProducts.forEach(producto =>{
            if(producto.id == idProducto){
                var aEliminar = dbProducts.indexOf(producto)
                dbProducts.splice(aEliminar,1)
            }
        })
        for(let i = 1; i < dbProducts.length; i++){
            dbProducts[i].id = i - 1;
        }
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts))
        res.redirect('/products/admin')
    }
}
