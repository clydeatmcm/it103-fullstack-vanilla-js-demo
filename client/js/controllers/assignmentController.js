import AssignmentModel from "../models/assignmentModel.js";

const AssignmentController = {
    assignTask: function (task_id, user_id) {
        if (!task_id || !user_id) {
            alert("Both Task ID and User ID are required!");
            return;
        }

        AssignmentModel.assignTask(task_id, user_id)
            .then(response => {
                alert("Task successfully assigned!");
                this.loadAssignments();
            })
            .catch(error => console.error("Error assigning task:", error));
    },

    loadAssignments: function () {
        AssignmentModel.getAssignments()
            .then(assignments => {
                const assignmentsList = document.getElementById("assignmentsList");
                assignmentsList.innerHTML = "<h4>Current Assignments</h4>";

                if (assignments.length === 0) {
                    assignmentsList.innerHTML += "<p>No assignments yet.</p>";
                    return;
                }

                assignments.forEach(assign => {
                    assignmentsList.innerHTML += `
                        <div class="alert alert-info">
                            Task #${assign.task_id} → Assigned to User #${assign.user_id}
                        </div>
                    `;
                });
            })
            .catch(error => console.error("Error loading assignments:", error));
    }
};

export default AssignmentController;
