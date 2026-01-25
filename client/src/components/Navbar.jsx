const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <ul className="flex space-x-8 text-sm">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">Projects</li>
          <li className="hover:text-red-400 cursor-pointer">About</li>
          <li className="hover:text-red-400 cursor-pointer">Contact</li>
        </ul>

        <div className="flex space-x-5 text-lg">
          <i className="fa-brands fa-github hover:text-red-400"></i>
          <i className="fa-brands fa-linkedin hover:text-red-400"></i>
          <i className="fa-brands fa-instagram hover:text-red-400"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
