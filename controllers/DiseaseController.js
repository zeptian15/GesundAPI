'use strict';
var sqlite = require('../config/conn_sqlite');

exports.diseases = (req, res) => {
    sqlite.all('SELECT * FROM penyakit', (err, rows, fields) => {
        if (err) {
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
};

exports.findDiseases = (req, res) => {
    var diseases_id = req.params.diseases_id;
    if (!diseases_id) {
        res.status(404).send({
            status_code: 404,
            error: true,
            msg: 'Parameter is required'

        })
    } else {

        sqlite.all('SELECT * FROM penyakit WHERE id = ?', [diseases_id], (err, rows, fields) => {
            if (err) {
                res.status(404).send({
                    status_code: 404,
                    error: true,
                    msg: 'Data not found'
        
                })
            } else {
                if(rows.length < 1) {
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