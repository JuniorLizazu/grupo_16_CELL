const path = require('path');

module.exports = {
    index: function(req, res){
        res.render('detailProductos', { 
            title: 'Detalle',
            css: 'detalle.css', 
        });
    }
}