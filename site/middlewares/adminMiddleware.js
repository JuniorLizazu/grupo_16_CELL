module.exports = (req, res, next) => {
    if (req.session.user != undefined && req.session.user.rol == "admin") {

        next()
    } else {
        res.render('admin.ejs',{
            title: 'Cuidado!',
            css: 'admin.css'
        })
    }
}


