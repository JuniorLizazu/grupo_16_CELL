const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const fs = require('fs');

module.exports = {
    notregister: function(req, res) {
        res.render('notRegister', { 
            title: '¡Hola! Para agregar al carrito, Ingresá a tu cuenta',
            css: 'notRegister.css',
        });
    },
    register: function(req, res) {
        res.render('register', {
            title: 'Registrate en Cell',
            css: 'register.css',
        });
    },
    social: function(req, res) {
        res.render('social', {
            title: 'Ingresá a tu cuenta con Google',
            css: 'social.css',
        });
    },
    enterCode: function(req, res) {
        res.render('enterCode', {
            title: 'Ingresá a tu cuenta con Google',
            css: 'enterCode.css',
        });
    },
    login: function(req, res) {
        res.render('login', { 
            title: 'Ingreso',
            css: 'login.css',
        });
    },
    
    social: function(req, res) {
        res.render('social', {
            title: 'Ingresá a tu cuenta con Google',
            css: 'social.css',
        });
    }
}