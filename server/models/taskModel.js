const db = require('../config/db');

const Task = {
    getAll: (callback) => {
        db.query('SELECT * FROM Task', callback);
    },
    create: (task_name, callback) => {
        db.query('INSERT INTO Task (task_name, task_created) VALUES (?, NOW())', [task_name], callback);
    },
    update: (id, task_name, task_completed, callback) => {
        db.query('UPDATE Task SET task_name = ?, task_completed = ? WHERE task_id = ?', [task_name, task_completed, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM Task WHERE task_id = ?', [id], callback);
    }
};

module.exports = Task;
