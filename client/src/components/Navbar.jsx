const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <div className="border border-white/20 rounded-full px-8 py-3 
                bg-white/5 backdrop-blur-md 
                shadow-lg">
          <ul className="flex items-center space-x-8 text-sm font-medium">
            <li className="hover:text-red-400 transition cursor-pointer">Home</li>
            <li className="hover:text-red-400 transition cursor-pointer">Projects</li>
            <li className="hover:text-red-400 transition cursor-pointer">About</li>
            <li className="hover:text-red-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>


        <div className="flex space-x-5 text-lg">
          <a href="https://github.com/Gaurav-Pareta"><i className="fa-brands fa-github hover:text-red-400 text-xl cursor-pointer"></i></a>
          <a href="https://www.linkedin.com/in/gaurav-pareta"> <i className="fa-brands fa-linkedin hover:text-red-400 text-xl cursor-pointer"></i></a>
          <a href="https://www.instagram.com/gauravpareta4?igsh=OWYwMDcxNzlqcDBl" ><i className="fa-brands fa-instagram hover:text-red-400 text-xl cursor-pointer"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
