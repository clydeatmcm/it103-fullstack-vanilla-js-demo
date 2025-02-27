import TaskModel from "../models/taskModel.js";
import TaskView from "../views/taskView.js";

const TaskController = {
    async loadTasks() {
        const tasks = await TaskModel.fetchTasks();
        TaskView.displayTasks(tasks);
    },

    async createTask(event) {
        event.preventDefault();
        const taskName = document.getElementById("taskName").value;
        await TaskModel.addTask({ task_name: taskName, task_completed: 0 });
        TaskController.loadTasks();
    }
};

export default TaskController;
