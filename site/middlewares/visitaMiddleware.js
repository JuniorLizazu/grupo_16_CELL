module.exports = (req, res, next)=>{
    if(req.session.user == undefined){
        next()
    } else {
        res.redirect('/')
    }
}