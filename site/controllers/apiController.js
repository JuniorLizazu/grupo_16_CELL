const path = require('path');
const db = require('../database/models')

module.exports = {
    email: function(req, res) {
        db.Users.findAll({
            attributes : [
                "email"
            ]
        })
        .then(emails => res.json(emails))
        .catch(error => res.send(error))
    },
    producto: function(req, res) {
        db.Products.findAll({
            attributes : [
                "name"
            ]
        })
        .then(names => res.json(names))
        .catch(error => res.json(error))
    }
}