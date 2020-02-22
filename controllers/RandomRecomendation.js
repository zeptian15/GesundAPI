'use strict'
var sqlite = require('../config/conn_sqlite');

exports.getRandomRecomendationMakanan = (req, res) =>  {
    // Menjalankan Fungsi
    sqlite.all('SELECT * FROM makanan ORDER BY RANDOM() LIMIT 4', (err, rows, fields) => {
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
    })
}

exports.getRandomRecomendationOlahraga = (req, res) =>  {
    // Menjalankan Fungsi
    sqlite.all('SELECT * FROM olahraga ORDER BY RANDOM() LIMIT 3', (err, rows, fields) => {
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
    })
}

exports.getRandomRecomendationDiet = (req, res) =>  {
    // Menjalankan Fungsi
    sqlite.all('SELECT * FROM diet ORDER BY RANDOM() LIMIT 3', (err, rows, fields) => {
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
    })
}