'use strict';

var response = require('../res');
var sqlite = require('../config/conn_sqlite');

exports.diets = (req, res) => {
    sqlite.all('SELECT * FROM diet', (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    }); 
};

exports.findDiets = (req, res) => {
    var diet_id = req.params.diet_id;

    sqlite.run('SELECT * FROM diet WHERE id = ?', [diet_id], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
            console.log(error)
        } else {
            response.ok(rows,res)
        }
    });
};

exports.createDiets = (req, res) => {
    var nama = req.body.nama;
    var deskripsi = req.body.deskripsi;
    var rekomendasi_waktu = req.body.rekomendasi_waktu;
    var gambar = req.body.gambar;

    sqlite.run('INSERT INTO diets (nama,deskripsi,rekomendasi_waktu,gambar) VALUES (?,?,?,?)', [nama,deskripsi,rekomendasi_waktu, gambar], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menambahkan diet!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menambahkan diet!", res)
        }
    });
};

exports.updateDiets = (req, res) => {
    var diet_id = req.body.diet_id;
    var nama = req.body.nama;
    var deskripsi = req.body.deskripsi;
    var rekomendasi_waktu = req.body.rekomendasi_waktu;
    var gambar = req.body.gambar;

    sqlite.run('UPDATE diet SET nama = ?, deskripsi = ?, rekomendasi_waktu = ?, gambar = ? WHERE id = ?', [nama,deskripsi,rekomendasi_waktu,gambar,diet_id], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal mengubah diet!", res)
            console.log(error)
        } else {
            response.ok("Berhasil mengubah diet!", res)
        }
    });
};

exports.deleteDiets = (req, res) => {
    var diet_id = req.body.diet_id;

    sqlite.run('DELETE FROM diet WHERE id = ?', [diet_id], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menghapus diet!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menghapus diet!", res)
        }
    });
};