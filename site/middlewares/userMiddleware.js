module.exports = (req, res, next)=>{
    if(req.session.user != undefined){
        res.render('profile.ejs', {
            title: "Perfil",
            css: 'profile.css'
        })
    } else {
        next();
    }
}
