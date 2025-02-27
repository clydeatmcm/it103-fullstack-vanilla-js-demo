const db = require('../config/db');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM User', callback);
    },
    create: (username, email, callback) => {
        db.query('INSERT INTO User (username, email) VALUES (?, ?)', [username, email], callback);
    }
};

module.exports = User;
