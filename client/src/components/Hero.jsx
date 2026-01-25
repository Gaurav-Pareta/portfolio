const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-12 lg:px-24 pt-20">
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="text-gray-300 text-lg mb-3">Hello, I'm Gaurav 👋</p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Code <span className="text-red-500">Explorer</span>
        </h1>

        <p className="text-gray-400 text-xl mb-8">
          Expanding skills and discovering new ways to innovate
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl px-8 py-3 mb-10 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Download CV
        </button>

        <div className="flex space-x-6 text-lg">
          <a 
            href="https://github.com/Gaurav-Pareta" 
            className="hover:text-red-400 text-2xl cursor-pointer transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/gaurav-pareta" 
            className="hover:text-red-400 text-2xl cursor-pointer transition duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            href="https://www.instagram.com/gauravpareta4" 
            className="hover:text-red-400 text-2xl cursor-pointer transition duration-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block ml-12">
        <div className="relative">
          {/* Main Profile Image */}
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl">
            <img 
              src="/luffy.jpg" 
              alt="Gaurav - Code Explorer" 
              className="w-full h-full object-cover"
            />
          </div>
          

        </div>
        
        {/* Floating text */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm font-mono">
            <span className="text-red-400 animate-pulse">█</span> Coding with passion
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;