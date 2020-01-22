'use strict';

var response = require('../res');
var sqlite = require('../config/conn_sqlite');

// Makanan
exports.foods = (req, res) => {
    sqlite.all('SELECT * FROM makanan', (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findFoods = (req, res) => {
    var food_id = req.params.food_id

    sqlite.run('SELECT * FROM makanan WHERE id = ?', [food_id], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.createFoods = (req, res) => {
    var nama = req.body.nama;
    var jenis = req.body.jenis;
    var kategori = req.body.kategori;
    var kalori = req.body.kalori;
    var gambar = req.body.gambar;

    sqlite.run('INSERT INTO makanan (nama, jenis, kategori, kalori, gambar) VALUES (?,?,?,?,?)', [nama, jenis, kategori, kalori,gambar], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menambahkan makanan!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menambahkan makanan!",res)
        }
    });
};

exports.updateFoods = (req, res) => {
    var food_id = req.body.food_id;
    var nama = req.body.nama;
    var jenis = req.body.jenis;
    var kategori = req.body.kategori;
    var kalori = req.body.kalori;
    var gambar = req.body.gambar;

    sqlite.run('UPDATE makanan set nama = ?, jenis = ?, kategori = ?, kalori = ?, gambar = ? WHERE id = ?', [nama,jenis,kategori,kalori, gambar,food_id], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal mengubah makanan!", res)
            console.log(error)
        } else {
            response.ok("Berhasil mengubah makanan!", res)
        }
    });
};

exports.deleteFoods = (req, res) => {
    var food_id = req.body.food_id;

    sqlite.run('DELETE FROM makanan WHERE id = ?', [food_id], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menghapus makanan!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menghapus makanan!", res)
        }
    });
};