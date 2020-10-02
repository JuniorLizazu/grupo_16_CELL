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
    show: function(req, res){
        res.render('show',{
            title: "Productos",
            css:"products.css",
            productos: dbProducts.filter(producto =>{
                return producto.category != "menu" && producto.category != "nomenu"
            })
        })
    },
    crear: function(req, res){
        res.render('cargaproducts',{
            title:"Carga de Productos",
            css:"cargaproducto.css",
        })
    },
    agregar: function(req,res){
        let nuevoID = 1;
        dbProducts.forEach(producto=>{
           if(producto.id > nuevoID){
               nuevoID = producto.id
           }
        })
        let productoNuevo={
            id:nuevoID +1,
            name: req.body.name,
            trademark:req.body.trademark,
            model: req.body.model,
            price: Number(req.body.price),
            image: "default.png",
            colors: req.body.colors,
            company: req.body.company,
            discount:  Number(req.body.discount),
            capacidad:  Number(req.body.capacidad),
            dualsim:  req.body.dualsim
        }
        ultimoID=productoNuevo.id
        dbProducts.push(productoNuevo);
        fs.writeFileSync(path.join(__dirname,"..","data","productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')
        res.redirect('/products')
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
            return producto.category != "menu" && producto.category != "nomenu"
        })
        res.render('vistaProducto',{
            title: 'Ver / Editar',
            css: 'vistaProducto.css',
            total: dbProducts.lenght,
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
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts))
        res.redirect('/products/admin')
    }
}