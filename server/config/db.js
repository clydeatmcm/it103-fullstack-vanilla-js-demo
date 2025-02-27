const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Add your MySQL password
    database: 'taskmgr_normalized'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;
