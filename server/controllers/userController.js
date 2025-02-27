const User = require('../models/userModel');

const UserController = {
    getAll: (req, res) => {
        User.getAll((err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    },
    create: (req, res) => {
        const { username, email } = req.body;
        if (!username || !email) return res.status(400).json({ error: "Both username and email are required" });

        User.create(username, email, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('User created');
        });
    }
};

module.exports = UserController;
