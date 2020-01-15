'use strict';

var response = require('../res');
var sqlite = require('../config/conn_sqlite');

// Olahraga
exports.sports = (req, res) => {
    sqlite.all('SELECT * FROM olahraga', (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findSports = (req, res) => {
    var sport_id = req.params.sport_id;

    sqlite.run('SELECT * FROM olaharaga WHERE id = ?', [sport_id], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
        } else {
            response.ok(rows,res)
        }
    });
};

exports.createSports = (req, res) => {
    var nama = req.body.nama;
    var jenis = req.body.jenis;
    var rekomendasi_waktu = req.body.rekomendasi_waktu;

    sqlite.run('INSERT INTO olahraga (nama, jenis, rekomendasi_waktu) VALUES (?,?,?)', [nama,jenis,rekomendasi_waktu], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menambahkan olahraga!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menambahkan olahraga!", res)
        }
    });
};

exports.updateSports = (req, res) => {
    var sport_id = req.body.sport_id;
    var nama = req.body.nama;
    var jenis = req.body.jenis;
    var rekomendasi_waktu = req.body.rekomendasi_waktu;

    sqlite.run('UPDATE olahraga set nama = ?, jenis = ?, rekomendasi_waktu = ? WHERE id = ?', [nama,jenis,rekomendasi_waktu,sport_id], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal mengubah olahraga", res)
            console.log(error)
        } else {
            response.ok("Berhasil mengubah olahraga!", res)
        }
    });
};

exports.deleteSports = (req, res) => {
    var sport_id = req.body.sport_id;

    sqlite.run('DELETE FROM olahraga WHERE id = ?', [sport_id], (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menghapus olahraga!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menghapus olahraga!", res)
        }
    });
};