console.log("JS LOADED");
const API_URL = "http://localhost:8080/api/portfolio";

// Load projects on page load
document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById("projectList");
            projectList.innerHTML = "";

            data.forEach(project => {
                const div = document.createElement("div");
                div.className = "project";

                div.innerHTML = `
                    <h3>${project.id} ${project.projectName}</h3>
                    <p>${project.description}</p>
                    <small>${project.techStack}</small>
                `;

                projectList.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
}

function addProject() {
    const projectName = document.getElementById("projectName").value;
    const description = document.getElementById("description").value;
    const techStack = document.getElementById("techStack").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            projectName,
            description,
            techStack
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to add project");
            }
            return response.json();
        })
        .then(() => {
            loadProjects(); // refresh list
            document.getElementById("projectName").value = "";
            document.getElementById("description").value = "";
            document.getElementById("techStack").value = "";
        })
        .catch(error => console.error("Error adding project:", error));
}
