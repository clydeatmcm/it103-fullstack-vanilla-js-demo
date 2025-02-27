import TaskView from "./views/taskView.js";
import UserView from "./views/userView.js";
import ProjectView from "./views/projectView.js";
import StatusView from "./views/statusView.js";
import AssignmentView from "./views/assignmentView.js";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    const routes = {
        "tasks": TaskView.render,
        "users": UserView.render,
        "projects": ProjectView.render,
        "statuses": StatusView.render,
        "assignments": AssignmentView.render
    };

    function navigateTo(route) {
        if (routes[route]) {
            content.innerHTML = "";  // Clear previous content
            routes[route]();
            updateActiveTab(route);
        }
    }

    function updateActiveTab(activeRoute) {
        document.querySelectorAll(".list-group-item, .nav-link").forEach(btn => {
            btn.classList.remove("active");
        });

        const sidebarButton = document.getElementById(`tab-${activeRoute}`);
        if (sidebarButton) {
            sidebarButton.classList.add("active");
        }
    }

    document.querySelectorAll(".list-group-item, .nav-link").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const route = e.target.id.replace("tab-", "");
            navigateTo(route);
        });
    });

    // Load default view
    navigateTo("tasks");
});
