const path = require('path');

module.exports ={ 
    index: function(req, res) {
        res.render('login', { 
            title: 'Ingreso',
            css: 'login.css',
        });
    }
}
