import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In <span className="text-red-500">Touch</span>
        </h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE – CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold">
              Let’s <span className="text-red-500">Connect</span>
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Have a project in mind, want to collaborate, or just say hi?
              I’m always open to discussing new ideas and opportunities.
            </p>

            {/* Info Items */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <span className="p-3 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition">
                  <FaMapMarkerAlt />
                </span>
                <p className="text-gray-300">Kota Rajasthan</p>
              </div>

              <div className="flex items-center gap-4 group">
                <span className="p-3 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition">
                  <FaEnvelope />
                </span>
                <p className="text-gray-300">paretagaurav2005@gmail.com</p>
              </div>

              <div className="flex items-center gap-4 group">
                <span className="p-3 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition">
                  <FaPhoneAlt />
                </span>
                <p className="text-gray-300">+91 9024332403</p>
              </div>
            </div>

            {/* Social Icons */}
            <SocialLinks/>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-red-500/10 transition">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white
                           focus:outline-none focus:border-red-500 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white
                           focus:outline-none focus:border-red-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white
                           focus:outline-none focus:border-red-500 transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 
                           text-white p-3 rounded-lg font-semibold
                           transition transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
