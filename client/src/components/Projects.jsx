import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


const Projects = () => {

  const projects = [
  {
    id: 1,

    name: "Eventoria",

    description:
      "A full-stack event management platform where users can explore, register, and manage events with authentication and responsive UI.",

    tech: ["React", "Node.js", "MongoDB", "Express"],

    github: "https://github.com/Gaurav-Pareta/Eventoria",
    live: "https://eventoria-kappa.vercel.app",

    image:
      "/eventoria.png",
  },

  {
    id: 2,

    name: "Dice Game",

    description:
      "An interactive dice game built with modern frontend technologies featuring score tracking, animations, and responsive gameplay.",

    tech: ["React", "JavaScript", "Tailwind"],

    github: "https://github.com/Gaurav-Pareta/Dice-Game.git",
    live: "https://dice-game-xi-self.vercel.app/",

    image:
      "/diceGame.png",
  },

  {
    id: 3,

    name: "Code-Lens",

    description:
      "An AI-powered coding assistant platform designed to help developers analyze, understand, and improve code efficiently.",

    tech: ["React", "AI", "Tailwind", "Node.js"],

    github: "https://github.com/Gaurav-Pareta/CodeLens-AI",
    live: "https://code-lens-ai-xi.vercel.app/",

    image:
      "/codeLens.png",
  },
];

  return (
    <section
      id="projects"
      className="py-24 relative"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-red-500">Projects</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project) => (

            <div
              key={project.id}

              className="group bg-white/5 backdrop-blur-md
              border border-white/10 rounded-2xl overflow-hidden
              shadow-lg hover:shadow-red-500/20
              hover:-translate-y-2 transition duration-300"
            >

              {/* Project Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}

                  className="w-full h-56 object-cover
                  group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/40
                  opacity-0 group-hover:opacity-100
                  transition duration-300 flex items-center justify-center gap-5"
                >

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"

                    className="p-3 rounded-full bg-white/10
                    hover:bg-red-500 transition"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"

                    className="p-3 rounded-full bg-white/10
                    hover:bg-red-500 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3
                  className="text-2xl font-semibold mb-3
                  text-white group-hover:text-red-400 transition"
                >
                  {project.name}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">

                  {project.tech.map((tech, index) => (

                    <span
                      key={index}

                      className="px-3 py-1 text-sm rounded-full
                      bg-red-500/10 border border-red-500/20
                      text-red-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;