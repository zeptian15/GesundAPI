'use strict'
var sqlite = require('../config/conn_sqlite');

exports.tips = (req, res) => {
    // Get All Tips
    sqlite.all('SELECT * FROM tips', (err, rows, fields) => {
        if(err){
            res.status(404).send({
                status_code: 404,
                error: true,
                msg: 'Data not found'
    
            })
        } else {
            res.status(200).send({
                status_code: 200,
                error: false,
                values: rows
    
            })
        }
    });
}