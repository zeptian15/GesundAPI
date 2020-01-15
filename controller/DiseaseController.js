'use strict';

var response = require('../res');
var sqlite = require('../config/conn_sqlite');

exports.diseases = (req, res) => {
    sqlite.all('SELECT * FROM penyakit', (error,rows,fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findDiseases = (req, res) => {
    var diseases_id = req.params.diseases_id;

    sqlite.run('SELECT * FROM penyakit WHERE id = ?', [diseases_id], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok(error, res)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.createDiseases = (req, res) => {
    var nama = req.body.nama;

    sqlite.run('INSERT INTO penyakit (nama) VALUES (?)', [nama], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menambahkan penyakit!", res)
            console.log(error)
        } else {
            response.ok("Berhasil menambahkan penyakit!",res)
        }
    });
};

exports.updateDiseases = (req, res) => {
    var diseases_id = req.body.diseases_id;
    var nama = req.body.nama;

    sqlite.run('UPDATE penyakit SET nama = ? WHERE id = ?', [nama, diseases_id], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal mengubah penyakit!", res)
            console.log(error)
        } else {
            response.ok("Berhasil mengubah penyakit!", res)
        }
    });
};

exports.deleteDiseases = (req, res) => {
    var diseases_id = req.body.diseases_id;

    sqlite.run('DELETE FROM penyakit WHERE id = ?', [diseases_id], (error, rows, fields) => {
        if(error){
            res.status(404)
            response.ok("Gagal menghapus penyakit!", res)
            console.log(error)
        } else {
            response.ok("Berhasil mengahapus penyakit!", res)
        }
    });
};
