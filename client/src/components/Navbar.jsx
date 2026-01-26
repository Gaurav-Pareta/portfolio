import { useEffect, useState } from "react";

const sections = ["home",  "about", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          MyPortfolio
        </h1>

        {/* Center Nav */}
        <div className="border border-white/20 rounded-full px-8 py-3 
                        bg-white/5 backdrop-blur-md 
                        shadow-lg transition-all duration-300 
                        hover:border-red-400 hover:scale-105">
          <ul className="flex items-center space-x-8 text-sm font-medium">

            {sections.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative cursor-pointer transition
                  ${active === item ? "text-red-400" : "hover:text-red-400"}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-red-400 rounded
                    transition-all duration-300
                    ${active === item ? "w-full" : "w-0"}`}
                />
              </li>
            ))}

          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-lg">
          <a href="https://github.com/Gaurav-Pareta" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github transition hover:text-red-400 hover:scale-125"></i>
          </a>
          <a href="https://www.linkedin.com/in/gaurav-pareta" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin transition hover:text-red-400 hover:scale-125"></i>
          </a>
          <a href="https://www.instagram.com/gauravpareta4" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram transition hover:text-red-400 hover:scale-125"></i>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
