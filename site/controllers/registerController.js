const path = require('path');


module.exports ={ 
    register: function(req, res) {
        res.render('register', {
            title: 'Completá tus datos',
            css: 'register.css',
        });
    },
    registerCart: function(req, res) {
        res.render('registerCart', {
            title: 'Completá tus datos',
            css: 'registerCart.css',
        });
    },
    social: function(req, res) {
        res.render('social', {
            title: 'Ingresá a tu cuenta con Google',
            css: 'social.css',
        });
    },
    enterCode: function(req, res) {
        res.render('enterCode', {
            title: 'Ingresá a tu cuenta con Google',
            css: 'enterCode.css',
        });
    }
};