const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border rounded-lg"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full p-3 border rounded-lg"
            />
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;