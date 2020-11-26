module.exports = (req,res,next) =>
{
    if (req.session.user){
        next()
    }
    else{
            res.redirect('/')
        }
    }

   /* if(req.session.user.categoria == 'user'){
        next()
    }else{
        res.redirect('/')
    }
}*/