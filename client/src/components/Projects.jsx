const Projects = () => {
  const projects = [
    { id: 1, name: "Project One", description: "A cool web app" },
    { id: 2, name: "Project Two", description: "Mobile application" },
    { id: 3, name: "Project Three", description: "E-commerce site" },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-red-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 
                         p-6 rounded-xl shadow-lg hover:scale-105 
                         transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
