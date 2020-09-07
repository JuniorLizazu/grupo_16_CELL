const path = require('path');

module.exports ={ 
    index: function(req, res) {
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
