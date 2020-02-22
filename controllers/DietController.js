'use strict';
var sqlite = require('../config/conn_sqlite');

exports.diets = (req, res) => {
    sqlite.all('SELECT * FROM diet', (err, rows, fields) => {
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

exports.findDiets = (req, res) => {
    var diet_id = req.params.diet_id;
    if (!diet_id) {
        res.status(404).send({
            status_code: 404,
            error: true,
            msg: 'Parameter is required'

        })
    } else {

        sqlite.all('SELECT * FROM diet WHERE id = ?', [diet_id], (err, rows, fields) => {
            if (err) {
                res.status(404).send({
                    status_code: 404,
                    error: true,
                    msg: 'Data not found'

                })
            } else {
                if (rows.length < 1) {
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