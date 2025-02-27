import ProjectController from "../controllers/projectController.js";

const ProjectView = {
    render() {
        document.getElementById("content").innerHTML = `
            <h2>Projects</h2>
            <form id="projectForm">
                <input type="text" id="projectName" placeholder="Project Name" required>
                <button type="submit">Add Project</button>
            </form>
            <ul id="projectList"></ul>
        `;
        document.getElementById("projectForm").addEventListener("submit", ProjectController.createProject);
        ProjectController.loadProjects();
    },

    displayProjects(projects) {
        const list = document.getElementById("projectList");
        list.innerHTML = projects.map(project => `<li>${project.project_name}</li>`).join("");
    }
};

export default ProjectView;
