const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Get In <span className="text-red-500">Touch</span>
        </h2>

        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md 
                        border border-white/10 p-8 rounded-xl">
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/40 
                         border border-white/10 text-white 
                         focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/40 
                         border border-white/10 text-white 
                         focus:outline-none focus:border-red-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-black/40 
                         border border-white/10 text-white 
                         focus:outline-none focus:border-red-500"
            />

            <button
              className="w-full bg-red-600 hover:bg-red-700 
                         text-white p-3 rounded-lg 
                         transition font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
