const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports = {
    index: function(req, res){
        let menu = dbProducts.filter(producto=>{
            return producto.category == "menu"
        })
        res.render('index', { 
            title: 'Cell',
            css: 'home.css',
            menu: menu,
        });
    }
}