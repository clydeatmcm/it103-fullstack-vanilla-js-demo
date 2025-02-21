// taskModel.js

const API_URL = 'http://localhost:3002/tasks';

class TaskModel {
    // Fetch all tasks
    static async fetchTasks() {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        return tasks;
    }

    // Add a new task
    static async addTask(taskName, taskCompleted) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task_name: taskName, task_completed: taskCompleted })
        });
        return response.ok;
    }

    // Update a task
    static async updateTask(taskId, taskName, taskCompleted) {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task_name: taskName, task_completed: taskCompleted })
        });
        return response.ok;
    }

    // Delete a task
    static async deleteTask(taskId) {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: 'DELETE',
        });
        return response.ok;
    }
}
