const path = require('path');


module.exports ={ 
    index: function(req, res) {
        res.render('register', {
            title: 'Registro',
            css: 'register.css',
        });
    }
};
