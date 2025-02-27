import AssignmentController from "../controllers/assignmentController.js";

const AssignmentView = {
    render: function () {
        const content = document.getElementById("content");
        content.innerHTML = `
            <div class="container">
                <h2 class="text-primary text-center">Assign Tasks</h2>
                <form id="assignTaskForm" class="mb-3">
                    <div class="mb-3">
                        <label for="task_id" class="form-label">Task ID</label>
                        <input type="number" id="task_id" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="user_id" class="form-label">User ID</label>
                        <input type="number" id="user_id" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-success">Assign Task</button>
                </form>
                <div id="assignmentsList"></div>
            </div>
        `;

        document.getElementById("assignTaskForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const task_id = document.getElementById("task_id").value;
            const user_id = document.getElementById("user_id").value;

            AssignmentController.assignTask(task_id, user_id);
        });

        AssignmentController.loadAssignments();
    }
};

export default AssignmentView;
