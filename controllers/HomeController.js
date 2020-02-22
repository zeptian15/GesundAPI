'use strict';
exports.index = (req, res) => {
    res.sendFile('index.html', { root: '.' });
};