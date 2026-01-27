import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 -top-px h-px 
        bg-linear-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="flex max-w-7xl mx-auto px-6 py-12 flex-col justify-center items-center">
        
        {/* Name / Copyright */}
        <p className="text-gray-500 text-sm tracking-wide mb-6 ">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">
            Gaurav Pareta
          </span>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <SocialLinks variant="text" />

        {/* Tagline */}
        <p className="mt-6 text-xs text-gray-600 font-mono">
          Built with focus, patience & code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
