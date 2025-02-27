import StatusController from "../controllers/statusController.js";

const StatusView = {
    render() {
        document.getElementById("content").innerHTML = `
            <h2>Statuses</h2>
            <form id="statusForm">
                <input type="text" id="statusName" placeholder="Status Name" required>
                <button type="submit">Add Status</button>
            </form>
            <ul id="statusList"></ul>
        `;
        document.getElementById("statusForm").addEventListener("submit", StatusController.createStatus);
        StatusController.loadStatuses();
    },

    displayStatuses(statuses) {
        const list = document.getElementById("statusList");
        list.innerHTML = statuses.map(status => `<li>${status.status_name}</li>`).join("");
    }
};

export default StatusView;
