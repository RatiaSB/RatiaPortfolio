import {useEffect, useState} from "react";


function App() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/portfolio`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

   return (
    <div>
      <h1>Ratia Portfolio</h1>

      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.id}. {project.projectName}</h3>
          <p>{project.description}</p>
          <small>{project.techStack}</small>
        </div>
      ))}
    </div>
  );
}

export default App;