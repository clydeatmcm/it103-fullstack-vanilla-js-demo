const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// database connection string
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Add your password here
    database: 'taskmgr'
  });

db.connect(err=>{
    if(err) throw err;
    console.log('Connected to MySQL');
});

// HTTP Get (Retrieve)

app.get('/tasks',(req, res)=>{
    // database (mysql) logic
    db.query('SELECT * FROM Task',(err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

// HTTP Post (Create)
app.post('/tasks', (req, res) => {
    const { task_name, task_completed } = req.body;

    if (!task_name) {
        return res.status(400).json({ error: "task_name is required" });
    }

    const query = 'INSERT INTO Task (task_name, task_completed, task_created) VALUES (?, ?, NOW())';
    db.query(query, [task_name, task_completed || 0], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Task created');
    });
});


// HTTP Put (Update)
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { task_name, task_completed } = req.body;
    const query = 'UPDATE Task SET task_name = ?, task_completed = ? WHERE task_id = ?';
    db.query(query, [task_name, task_completed, id], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send('Task updated');
    });
  });

// HTTP Delete (Delete)
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Task WHERE task_id = ?', [id], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send('Task deleted');
    });
  });


const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
});
