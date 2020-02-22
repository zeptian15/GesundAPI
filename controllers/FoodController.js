'use strict';
var sqlite = require('../config/conn_sqlite');

// Makanan
exports.foods = (req, res) => {
    sqlite.all('SELECT * FROM makanan', (err, rows, fields) => {
        if (err) {
            res.status(404).send({
                status_code: 404,
                msg: 'Parameter is required'
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

exports.findFoods = (req, res) => {
    var food_id = req.params.food_id
    if (!food_id) {
        res.status(404).send({
            status_code: 404,
            msg: 'Parameter is required'
        })
    } else {

        sqlite.all('SELECT * FROM makanan WHERE id = ?', [food_id], (err, rows, fields) => {
            if (err) {
                res.status(404).send({
                    status_code: 404,
                    error: true,
                    msg: 'Data Not Found'

                })
            } else {
                if (rows.length < 1) {
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
            }
        });
    }
};