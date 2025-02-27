const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const statusRoutes = require('./routes/statusRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

// Use Routes
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use('/statuses', statusRoutes);
app.use('/assignments', assignmentRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
