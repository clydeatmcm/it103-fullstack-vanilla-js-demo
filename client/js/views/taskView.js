import TaskController from "../controllers/taskController.js";

const TaskView = {
    render() {
        document.getElementById("content").innerHTML = `
            <h2>Tasks</h2>
            <form id="taskForm">
                <input type="text" id="taskName" placeholder="Task Name" required>
                <button type="submit">Add Task</button>
            </form>
            <ul id="taskList"></ul>
        `;
        document.getElementById("taskForm").addEventListener("submit", TaskController.createTask);
        TaskController.loadTasks();
    },

    displayTasks(tasks) {
        const list = document.getElementById("taskList");
        list.innerHTML = tasks.map(task => `<li>${task.task_name}</li>`).join("");
    }
};

export default TaskView;
