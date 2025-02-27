const API_URL = "http://localhost:3002/assignments";

const AssignmentModel = {
    assignTask: function (task_id, user_id) {
        return fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task_id, user_id })
        }).then(response => response.json());
    },

    getAssignments: function () {
        return fetch(API_URL)
            .then(response => response.json());
    }
};

export default AssignmentModel;
