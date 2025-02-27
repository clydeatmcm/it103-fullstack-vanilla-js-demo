const db = require('../config/db');

const TaskStatus = {
    getAll: (callback) => {
        db.query('SELECT * FROM TaskStatus', callback);
    }
};

module.exports = TaskStatus;
