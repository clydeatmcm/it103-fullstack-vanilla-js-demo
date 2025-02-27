const Project = require('../models/projectModel');

const ProjectController = {
    getAll: (req, res) => {
        Project.getAll((err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    },
    create: (req, res) => {
        const { project_name } = req.body;
        if (!project_name) return res.status(400).json({ error: "project_name is required" });

        Project.create(project_name, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('Project created');
        });
    }
};

module.exports = ProjectController;
