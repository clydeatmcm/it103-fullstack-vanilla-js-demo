// taskController.js

class TaskController {
    static async fetchTasks() {
        const tasks = await TaskModel.fetchTasks();
        TaskView.displayTasks(tasks);
    }

    static async addTask(e) {
        e.preventDefault();
        const { taskName, taskCompleted } = TaskView.getTaskFormData();

        if (!taskName) {
            return alert('Task name is required');
        }

        const success = await TaskModel.addTask(taskName, taskCompleted);
        if (success) {
            TaskView.clearInputFields();
            TaskController.fetchTasks();
        } else {
            alert('Failed to add task');
        }
    }

    static async updateTask(taskId) {
        const taskName = prompt('Enter new task name:');
        if (!taskName) return;

        const taskCompleted = confirm('Is this task completed?') ? 1 : 0;
        const success = await TaskModel.updateTask(taskId, taskName, taskCompleted);

        if (success) {
            TaskController.fetchTasks();
        } else {
            alert('Failed to update task');
        }
    }

    static async deleteTask(taskId) {
        const success = await TaskModel.deleteTask(taskId);
        if (success) {
            TaskController.fetchTasks();
        } else {
            alert('Failed to delete task');
        }
    }
}
