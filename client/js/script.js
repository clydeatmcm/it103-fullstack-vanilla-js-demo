// script.js

document.getElementById('addTaskForm').addEventListener('submit', (e) => {
    TaskController.addTask(e);
});

window.onload = () => {
    TaskController.fetchTasks();
};
