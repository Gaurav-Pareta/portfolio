import { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";


const About = () => {

 const [code, setCode] = useState(`const developer = {
  name: "Gaurav",
  role: "Computer Science Student",
  interests: ["Web Development", "Artificial Intelligence"],
  mindset: "Learning by building",
  focus: "Real-world problem solving",
};

function aboutMe() {
  console.log(\`\${developer.name} enjoys exploring technology and creating useful projects.\`);
}
`);


  const skills = [
    // Frontend
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
    { id: 5, name: "Tailwind CSS" },

    // Backend
    { id: 6, name: "Node.js" },
    { id: 7, name: "Express.js" },

    // Database
    { id: 8, name: "MongoDB" },

    // Tools & Platforms
    { id: 12, name: "Git" },
    { id: 13, name: "GitHub" },
    { id: 14, name: "REST APIs" },
    { id: 15, name: "Hoppscotch.io" },
  ];



  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">About <span className="text-red-500">Me</span></h2>
      <div className="flex w-full items-start gap-16 mx-10
 container">
        <div className="w-full max-w-2xl px-3 text-start">
          <p className="text-lg text-gray-400 mb-7">
            I’m a computer science student who enjoys exploring different areas of technology, from building web applications to learning about artificial intelligence. I like experimenting with new ideas, understanding how systems work, and turning concepts into practical projects. Learning by building is how I grow, and I’m always open to exploring new tools and domains. This website is a space where I share my work, skills, and ongoing journey in tech.
          </p>

          <h3 className="mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2 justify-start">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="px-4 py-3 text-sm rounded-xl
                 bg-[#2a0000] text-red-600
                 border border-red-500/30
                 shadow-lg
                 transition-all duration-300
                 hover:bg-red-600 hover:text-white hover:scale-105"
              >
                {skill.name}
              </span>
            ))}
          </div>

        </div>

        <div className="bg-black/70 border border-red-500/30 rounded-2xl w-full p-6 
                shadow-[0_0_30px_rgba(239,68,68,0.15)]">

          <div className="text-red-400 text-sm font-mono">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, "javascript")
              }

              padding={16}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 15,
                backgroundColor: "transparent",
                color: "#f87171",
                minHeight: "300px",
                maxHeight: "320px",
                outline: "none",
              }}


            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;