let registerController ={ 
    'notRegister': function(req, res) {
        res.render('/partials/notRegister');
    },
    'register': function(req, res) {
        res.render('/partials/register');
    },
    'registerCart': function(req, res) {
        res.render('/partials/registerCart');
    }
};
module.exports=registerController;