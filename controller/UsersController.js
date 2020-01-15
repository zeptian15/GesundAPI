'use strict';

// var response = require('../res');
// var connection = require('../config/conn');

// exports.users = (req, res) => {
//     connection.query('SELECT * FROM person', (error, rows, fields) => {
//         if(error){
//             console.log(error)
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };

exports.index = (req, res) => {
    res.sendFile('index.html', { root: '.' });
};

// exports.findUsers = (req, res) => {
//     var user_id = req.params.user_id;

//     connection.query('SELECT * FROM person where id = ?', [user_id], (error, rows, fields) => {
//         if(error){
//             console.log(error);
//         } else {
//             response.ok(rows, res)
//         }
//     });
// };

// exports.createUsers = (req, res) => {
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;

//     connection.query('INSERT INTO person (firstname, lastname) VALUES (?,?)', [firstname, lastname], (error, rows, fields) => {
//         if(error){
//             console.log(error);
//         } else {
//             response.ok('Berhasil menambahkan user!', res)
//         }
//     });
// };

// exports.updateUsers = (req, res) => {
//     var user_id = req.body.user_id;
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;

//     connection.query('UPDATE person SET firstname = ?, lastname = ? WHERE id = ?', [firstname, lastname, user_id], (error, rows, fields) => {
//         if(error) {
//             console.log(error)
//         } else {
//             response.ok("Berhasil merubah user!", res)
//         }
//     });
// };

// exports.deleteUsers = (req, res) => {
//     var user_id = req.body.user_id;

//     connection.query('DELETE FROM person WHERE id = ?', [user_id], (error, rows, fields) => {
//         if(error){
//             console.log(error)
//         } else {
//             response.ok("Berhasil mengahapus user!", res)
//         }
//     });
// };