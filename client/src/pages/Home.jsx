import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;