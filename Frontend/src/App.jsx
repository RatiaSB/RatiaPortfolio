import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const base = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
  const API_URL = `${base}/api/portfolio`;

  useEffect(() => {
    loadProjects();
  }, []);

  function loadProjects() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }

  function addProject() {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectName, description, techStack }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add project");
        return res.json();
      })
      .then(() => {
        setProjectName("");
        setDescription("");
        setTechStack("");
        loadProjects();
      })
      .catch((error) => console.error("Error adding project:", error));
  }

  function deleteProject(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => loadProjects())
      .catch((error) =>
        console.error("Error deleting project:", error)
      );
  }

  function editProject(project) {
    setEditingId(project.id);
    setProjectName(project.projectName);
    setDescription(project.description);
    setTechStack(project.techStack);
  }

  function updateProject() {
    fetch(`${API_URL}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectName,
        description,
        techStack,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update project");
        return res.json();
      })
      .then(() => {
        // apply updated values to state immediately for instant UI feedback
        setProjects((prev) =>
          prev.map((p) =>
            p.id === editingId
              ? { ...p, projectName, description, techStack }
              : p
          )
        );

        setProjectName("");
        setDescription("");
        setTechStack("");
        setEditingId(null);
        setMessage("Project updated successfully.");
        setTimeout(() => setMessage(""), 3000);
      })
      .catch((error) =>
        console.error("Error updating project:", error)
      );
  }

  return (
    <div>
      <header>
        <h1>Ratia Profile</h1>
        <p>Full-Stack Developer | Java Spring Boot</p>
      </header>

      {/* FORM SECTION */}
      <section id="form-section">
        <h2>{editingId ? "Update Project" : "Add Project"}</h2>

        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
        />

        <input
          type="text"
          placeholder="Tech Stack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />

        <button
          onClick={editingId ? updateProject : addProject}
        >
          {editingId ? "Update Project" : "Add Project"}
        </button>
        {message && <div className="message">{message}</div>}
      </section>

      {/* PROJECT LIST */}
      <section id="projects">
        <h2>My Projects</h2>

        <div id="projectList">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <h3>
                {project.id}. {project.projectName}
              </h3>

              <p>{project.description}</p>

              <small>{project.techStack}</small>

              {/* BUTTONS INSIDE CARD */}
              <div className="buttons">
                <button onClick={() => editProject(project)}>
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;