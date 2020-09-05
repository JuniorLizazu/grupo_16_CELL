const path = require('path');

module.exports ={ 
    login: function(req, res) {
        res.render('login', { 
            title: 'Ingreso',
            css: 'login.css',
        });
    },
    enterPass: function(req, res) {
        res.render('enterPass', { 
            title: 'Ahora, tu clave',
            css: 'enterPass.css',
        });
    },
    social: function(req, res) {
        res.render('social', {
            title: 'Ingresá a tu cuenta con Google',
            css: 'social.css',
        });
    }
}
