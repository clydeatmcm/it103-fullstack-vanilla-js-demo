const db = require('../config/db');

const TaskAssignment = {
    assign: (task_id, user_id, status_id, callback) => {
        db.query('INSERT INTO TaskAssignment (task_id, user_id, status_id) VALUES (?, ?, ?)', [task_id, user_id, status_id], callback);
    }
};

module.exports = TaskAssignment;
