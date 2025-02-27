const TaskModel = {
    async fetchTasks() {
        const res = await fetch("http://localhost:3002/tasks");
        return res.json();
    },

    async addTask(task) {
        return fetch("http://localhost:3002/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
    }
};

export default TaskModel;