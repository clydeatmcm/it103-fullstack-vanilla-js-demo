const db = require('../config/db');

const Project = {
    getAll: (callback) => {
        db.query('SELECT * FROM Project', callback);
    },
    create: (project_name, callback) => {
        db.query('INSERT INTO Project (project_name, project_created) VALUES (?, NOW())', [project_name], callback);
    }
};

module.exports = Project;
