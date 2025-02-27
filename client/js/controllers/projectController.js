import ProjectModel from "../models/projectModel.js";
import ProjectView from "../views/projectView.js";

const ProjectController = {
    async loadProjects() {
        const projects = await ProjectModel.fetchProjects();
        ProjectView.displayProjects(projects);
    },

    async createProject(event) {
        event.preventDefault();
        const projectName = document.getElementById("projectName").value;
        await ProjectModel.addProject({ project_name: projectName });
        ProjectController.loadProjects();
    }
};

export default ProjectController;
