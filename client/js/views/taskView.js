// taskView.js

class TaskView {
    static displayTasks(tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task.task_name} - ${task.task_completed ? 'Completed' : 'Pending'}</span>
                <button class="update" onclick="TaskController.updateTask(${task.task_id})">Update</button>
                <button class="delete" onclick="TaskController.deleteTask(${task.task_id})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    static clearInputFields() {
        document.getElementById('taskName').value = '';
        document.getElementById('taskCompleted').checked = false;
    }

    static getTaskFormData() {
        const taskName = document.getElementById('taskName').value;
        const taskCompleted = document.getElementById('taskCompleted').checked ? 1 : 0;
        return { taskName, taskCompleted };
    }
}
