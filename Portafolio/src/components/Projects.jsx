const projectData = [
  {
    title: "Calculadora React",
    description: "Aplicación web simple de una calculadora desarrollada con React.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://calicheoficial.lat/23221/Proyecto1/dist/"
  }
];

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <h2>Proyectos</h2>

      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>
            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
