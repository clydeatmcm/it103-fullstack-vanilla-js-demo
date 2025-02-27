const StatusModel = {
    async fetchStatuses() {
        const res = await fetch("http://localhost:3002/statuses");
        return res.json();
    },

    async addStatus(status) {
        return fetch("http://localhost:3002/statuses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(status),
        });
    }
};

export default StatusModel;
