module.exports = (req, res, next)=>{
    if(req.session.user != undefined){
        res.render('index.ejs', {
            title: "Bienvenidos a Cell",
            css: 'home.css'
        })
    } else {
        next();
    }
}
