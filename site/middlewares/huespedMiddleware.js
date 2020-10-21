module.exports = (req, res, next)=>{
    if(req.session.user != undefined){
        next()
    } else {
        res.render('huesped.ejs', {
            title: "Cuidado!",
            css: 'admin.css'
        })
    }
}