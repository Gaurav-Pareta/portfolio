import './App.css';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Footer from '../src/components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#2a0000] to-[#4a0000] text-white">
      <Navbar />
      <Hero/>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;