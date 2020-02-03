'use strict'

var response = require('../res');
var sqlite = require('../config/conn_sqlite');

exports.tips = (req, res) => {
    // Get All Tips
    sqlite.all('SELECT * FROM tips', (error, rows, fields) => {
        if(error){
            res.status(404)
            throw error
        } else {
            response.ok(rows, res)
        }
    });
}