const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Gaurav Pareta. All rights reserved.
        </p>

        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-red-400 transition">GitHub</a>
          <a href="#" className="hover:text-red-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-red-400 transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
