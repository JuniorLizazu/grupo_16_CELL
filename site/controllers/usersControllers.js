const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const fs = require('fs');

const bcrypt = require('bcrypt');

module.exports={
    register:function(req,res){
        res.render('userRegister',{
            title:"Registro de Usuario",
            css:'register.css'
        })
    },
    processRegister:function(req,res){
        let errors = validationResult(req);
        let lastID = 0;
        if(dbUsers.length != 0){
            dbUsers.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            })
        }
        if(errors.isEmpty()){
            let newUser = {
                id: lastID + 1,
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                avatar: (req.files[0])?req.files[0].filename:"default.png",
                password:bcrypt.hashSync(req.body.pass,10),
                rol:"user"
            }
            dbUsers.push(newUser);
            fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
    
            return res.redirect('/users/login')
        }else{
            res.render('userRegister',{
                title:"Registro de Usuario",
                css:"register.css",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    login:function(req,res){
        res.render('userLogin',{
            title:"Ingresá a tu cuenta",
            css: 'login.css'
        })
    },
    processLogin:function(res,res){

    },
}


