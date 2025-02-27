const Task = require('../models/taskModel');

const TaskController = {
    getAll: (req, res) => {
        Task.getAll((err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    },
    create: (req, res) => {
        const { task_name } = req.body;
        if (!task_name) return res.status(400).json({ error: "task_name is required" });

        Task.create(task_name, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('Task created');
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const { task_name, task_completed } = req.body;
        Task.update(id, task_name, task_completed, (err, result) => {
            if (err) return res.status(500).send(err);
            res.send('Task updated');
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        Task.delete(id, (err, result) => {
            if (err) return res.status(500).send(err);
            res.send('Task deleted');
        });
    }
};

module.exports = TaskController;
