const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <div className="border border-white/20 rounded-full px-8 py-3 
                bg-white/5 backdrop-blur-md 
                shadow-lg transition-all duration-300 hover:border-red-400 hover:scale-105">
          <ul className="flex items-center space-x-8 text-sm font-medium">
            <li className="relative cursor-pointer hover:text-red-400 transition">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-400 rounded transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative cursor-pointer hover:text-red-400 transition">
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-400 rounded
                       transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative cursor-pointer hover:text-red-400 transition">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-400 rounded
                       transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative cursor-pointer hover:text-red-400 transition">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-400 rounded
                       transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>


        <div className="flex space-x-5 text-lg">
          <a href="https://github.com/Gaurav-Pareta"><i className="fa-brands fa-github hover:text-red-400 text-xl cursor-pointer hover:scale-130 transition-all duration-100"></i></a>
          <a href="https://www.linkedin.com/in/gaurav-pareta"> <i className="fa-brands fa-linkedin hover:text-red-400 text-xl cursor-pointer hover:scale-130 transition-all duration-100"></i></a>
          <a href="https://www.instagram.com/gauravpareta4?igsh=OWYwMDcxNzlqcDBl" ><i className="fa-brands fa-instagram hover:text-red-400 text-xl cursor-pointer hover:scale-130 transition-all duration-100"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
