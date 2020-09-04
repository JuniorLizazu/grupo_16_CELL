const path = require('path');

module.exports ={ 
    index: function(req, res) {
        res.render('cart', { 
            title: 'Carrito',
            css: 'cart.css',
        });
    }
}
