module.exports = function(req,res,next){
    if(req.cookies.userCell){
        console.log(req.cookies.userCell)
        req.session.user = req.cookies.userCell;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}