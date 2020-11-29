const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');


// Requiero la base de datos
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");

module.exports={
    register:function(req,res){
        res.render('userRegister',{
            title:"Registro de Usuario",
            css:'register.css',
            script:"registerUser.js",
        })
    },
    processRegister: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                avatar: (req.files[0])?req.files[0].filename:"default.png",
                password:bcrypt.hashSync(req.body.pass,10),
                rol: "user"
            })
                .then((usuario) => {
                    console.log(usuario);
                    return res.redirect("/users/login");
                })
                .catch((error) => {
                    res.send(error);
                });
        } else {
            res.render("userRegister", {
                title: "Registro de usuario",
                css: "register.css",
                errors: errors.mapped(),
                old: req.body,
            });
        }
    },
    login:function(req,res){
        res.render('userLogin',{
            title:"Ingresá a tu cuenta",
            css: 'login.css',
            script: 'userLogin.js'
        })
    },
    processLogin: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.findOne({
                where: {
                    email: req.body.email,
                },
            })
                .then((user) => {
                    req.session.user = {
                        id: user.id,
                        nick: user.nombre + " " + user.apellido,
                        email: user.email,
                        avatar:user.avatar,
                        rol: user.rol
                    };
                    if (req.body.recordar) {
                        res.cookie("userCell", req.session.user, {
                            maxAge: 1000 * 60 * 60,
                        });
                    }
                    return res.redirect("/");
                })
                .catch((error) => {
                    res.send(error);
                });
        } else {
            res.render("userLogin", {
                title: "Ingresar",
                css: "login.css",
                errors: errors.mapped(),
                old: req.body,
            });
        }
    },
    listar: function(req, res){
        db.Users.findAll()
        .then(usuario=>{
            res.render('usersLista',{
                title: 'Admin. Usuarios',
                css: 'usersLista.css',
                usuario: usuario
            })
        })
    },
    profile:function(req,res){
        db.Users.findByPk(req.session.user.id)
            .then(usuario =>{
                res.render("userProfile",{
                    title: "Perfil de Usuario",
                    css: "profile.css",
                    script: 'userProfile.js',
                    usuario: usuario
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    editar: function(req, res){

        db.Users.update({
            avatar: (req.files[0])?req.files[0].filename:req.session.user.avatar,
            direccion: req.body.direccion.trim(),
            ciudad : req.body.ciudad != '' && req.body.ciudad != 0 ?req.body.ciudad.trim():null,
            provincia: req.body.provincia != '' && req.body.provincia != 0 ?req.body.provincia.trim():null,
            fecha: req.body.fecha
        },
        {
            where:{
                id: req.params.id
            }
        })
        .then(()=>{
            req.session.user.nombre = req.body.nombre
            req.session.user.apellido = req.body.apellido
            req.session.user.alias = req.body.nombre +' '+ req.body.apellido
            res.redirect('/')
        })
        .catch(error=>{
            res.send(error)
        })

    },
    logout:function(req,res){
        req.session.destroy()
        if(req.cookies.userCell){
            res.cookie('userCell',' ',{maxAge:-1});
        } 
        return res.redirect('/')
    },
    eliminar:(req, res) => {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result=>{
            req.session.destroy();
            if(req.cookies.userCell){
                res.cookie('userCell',' ',{ maxAge: -1})
            }            
            res.redirect('/')
        })
    }
}
