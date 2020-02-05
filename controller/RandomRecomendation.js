'use strict'

var response = require('../res');
var sqlite = require('../config/conn_sqlite');
var rekomndasiDietContainer = {};

exports.getRandomRecomendationMakanan = (req, res) =>  {
    // Menjalankan Fungsi
    sqlite.all('SELECT * FROM makanan ORDER BY RANDOM() LIMIT 4', (err, rows, fields) => {
        if(err){
            console.log(err)
            throw err
        } else {
            response.ok(rows,res)
        }
    })
}

exports.getRandomRecomendationOlahraga = (req, res) =>  {
    // Menjalankan Fungsi
    sqlite.all('SELECT * FROM olahraga ORDER BY RANDOM() LIMIT 3', (err, rows, fields) => {
        if(err){
            console.log(err)
            throw err
        } else {
            response.ok(rows,res)
        }
    })
}

exports.getRandomRecomendationDiet = (req, res) =>  {
    // Menjalankan Fungsi
    sqlite.all('SELECT * FROM diet ORDER BY RANDOM() LIMIT 3', (err, rows, fields) => {
        if(err){
            console.log(err)
            throw err
        } else {
            response.ok(rows,res)
        }
    })
}