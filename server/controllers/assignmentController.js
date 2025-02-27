const TaskAssignment = require('../models/assignmentModel');

const AssignmentController = {
    assignTask: (req, res) => {
        const { task_id, user_id, status_id } = req.body;
        if (!task_id || !user_id || !status_id) {
            return res.status(400).json({ error: "task_id, user_id, and status_id are required" });
        }

        TaskAssignment.assign(task_id, user_id, status_id, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('Task assigned to user');
        });
    }
};

module.exports = AssignmentController;
