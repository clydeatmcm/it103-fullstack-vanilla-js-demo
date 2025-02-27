const ProjectModel = {
    async fetchProjects() {
        const res = await fetch("http://localhost:3002/projects");
        return res.json();
    },

    async addProject(project) {
        return fetch("http://localhost:3002/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project),
        });
    }
};

export default ProjectModel;
