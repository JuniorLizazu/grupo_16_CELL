let loginController ={ 
    'login': function(req, res) {
        res.render('/partials/login');
    },
    'enterCode': function(req, res) {
        res.render('partials/enterCode');
    },
    'enterPass': function(req, res) {
        res.render('/partials/enterPass');
    },
    'social': function(req, res) {
        res.render('partials/social');
    }
};
module.exports=loginController;