import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const base = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
  const API_URL = `${base}/api/portfolio`;

  useEffect(() => {
    loadProjects();
  }, []);

  function loadProjects() {
    console.log("Fetching projects from:", API_URL);
    fetch(API_URL)
      .then((response) => {
        console.log("Projects fetch status:", response.status);
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }

  function addProject() {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectName, description, techStack }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to add project");
        return response.json();
      })
      .then(() => {
        setProjectName("");
        setDescription("");
        setTechStack("");
        loadProjects();
      })
      .catch((error) => console.error("Error adding project:", error));
  }

  return (
    <div>
      <header>
        <h1>Ratia Profile</h1>
        <p>Full-Stack Developer | Java Spring Boot</p>
      </header>

      <section id="form-section">
        <h2>Add Project</h2>
        <input
          type="text"
          id="projectName"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="text"
          id="description"
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          id="techStack"
          placeholder="Tech Stack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />
        <button onClick={addProject}>Add Project</button>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div id="projectList">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <h3>
                {project.id} {project.projectName}
              </h3>
              <p>{project.description}</p>
              <small>{project.techStack}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;