'use strict';
var sqlite = require('../config/conn_sqlite');

// Olahraga
exports.sports = (req, res) => {
    sqlite.all('SELECT * FROM olahraga', (err, rows, fields) => {
        if (err) {
            res.status(404).send({
                status_code: 404,
                error: true,
                msg: 'Data Not Found'

            })
        } else {
            res.status(200).send({
                status_code: 200,
                error: false,
                values: rows

            })
        }
    });
};

exports.findSports = (req, res) => {
    var sport_id = req.params.sport_id;
    if (!sport_id) {
        res.status(404).send({
            status_code: 404,
            error: true,
            msg: 'Parameter is required'

        })
    } else {

        sqlite.all('SELECT * FROM olahraga WHERE id = ?', [sport_id], (err, rows, fields) => {
            if (err) {
                res.status(404).send({
                    status_code: 404,
                    error: true,
                    msg: 'Data not found'
        
                })
            } else {
                if(rows.length < 1){
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
            }
        });
    }
};