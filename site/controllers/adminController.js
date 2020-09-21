const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs');


module.exports = { 
    show:  function(req, res){
        res.render('show',{
            title: "Productos",
            css:"products.css",
            productos: dbProducts
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
            trademark: req.body.marca,
            model: req.body.model,
            price:Number(req.body.price),
            image: "default-image.png",
            colors: req.body.colors,
            company: req.body.company,
            discount: Number(req.body.discount),
            capacidad: Number(req.body.memory),
            dualsim: req.body.exampleRadios,
            
        }
        ultimoID=productoNuevo.id
        dbProducts.push(productoNuevo);
        fs.writeFileSync(path.join(__dirname,"..","data","productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')
        res.redirect('/admin/show/'+ ultimoID +'/show')
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
            title: 'Ver - Editar',
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
        res.redirect('/admin/show/'+ idProducto +'/show')
    }
}