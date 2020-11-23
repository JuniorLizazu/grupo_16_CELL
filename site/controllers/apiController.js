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
    }

}