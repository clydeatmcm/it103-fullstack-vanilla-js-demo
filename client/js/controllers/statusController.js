import StatusModel from "../models/statusModel.js";
import StatusView from "../views/statusView.js";

const StatusController = {
    async loadStatuses() {
        const statuses = await StatusModel.fetchStatuses();
        StatusView.displayStatuses(statuses);
    },

    async createStatus(event) {
        event.preventDefault();
        const statusName = document.getElementById("statusName").value;
        await StatusModel.addStatus({ status_name: statusName });
        StatusController.loadStatuses();
    }
};

export default StatusController;
