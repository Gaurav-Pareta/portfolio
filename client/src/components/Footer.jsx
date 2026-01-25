const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-gray-300">GitHub</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;