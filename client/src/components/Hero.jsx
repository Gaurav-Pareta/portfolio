import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const [imgStyle, setImgStyle] = useState({});

  return (
    <section id="home" className=" min-h-screen flex items-center justify-between px-6 md:px-12 lg:px-30 pt-20">
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="text-gray-300 text-lg mb-3">Hello, I'm Gaurav 👋</p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Code <span className="text-red-500">
            <Typewriter
              words={["Explorer", "Builder", "Learner", "Creator"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>

        </h1>

        <p className="text-gray-400 text-xl mb-8">
          Expanding skills and discovering new ways to innovate
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl px-8 py-3 mb-10 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Download CV
        </button>

        <SocialLinks/>
      </div>

      {/* Right Image */}
<div className="hidden lg:block ml-12">
  <div className="relative flex justify-center">

    {/* Dark Red Glow */}
    <div className="absolute inset-0 rounded-full 
      bg-red-900/30 blur-3xl scale-110" />

    {/* Interactive Image */}
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / rect.height) * 12;
        const rotateY = ((x - rect.width / 2) / rect.width) * -12;

        setImgStyle({
          transform: `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
          `,
        });
      }}
      onMouseLeave={() =>
        setImgStyle({
          transform: `
            perspective(800px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
          `,
        })
      }
      style={imgStyle}
      className="relative w-80 h-80 transition-transform duration-200 ease-out"
    >
      <div className="w-full h-full rounded-full overflow-hidden 
        border-4 border-red-500 shadow-2xl">
        <img
          src="/luffy.jpg"
          alt="Gaurav - Code Explorer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Floating Text */}
  <div className="mt-8 text-center">
    <p className="text-gray-400 text-sm font-mono">
      <span className="text-red-400 animate-pulse">█</span> Coding with passion
    </p>
  </div>
</div>



    </section>
  );
};

export default Hero;