const TaskStatus = require('../models/statusModel');

const StatusController = {
    getAll: (req, res) => {
        TaskStatus.getAll((err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    }
};

module.exports = StatusController;
