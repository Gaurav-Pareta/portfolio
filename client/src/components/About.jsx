const About = () => {
  return (
    <section id="about" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="flex items-center container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            I’m a computer science student who enjoys exploring different areas of technology, from building web applications to learning about artificial intelligence. I like experimenting with new ideas, understanding how systems work, and turning concepts into practical projects. Learning by building is how I grow, and I’m always open to exploring new tools and domains. This website is a space where I share my work, skills, and ongoing journey in tech.
          </p>
        </div>

        <div className="bg-black text-red-900 rounded-2xl p-20">Code editor</div>
      </div>
    </section>
  );
};

export default About;