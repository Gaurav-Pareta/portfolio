import { useEffect, useState } from "react";

const FloatingParticles = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }).map(() => {
      const isLine = Math.random() > 0.6; // 40% lines
      return {
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        height: isLine ? Math.random() * 30 + 15 : null,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 10,
        type: isLine ? "line" : "dot",
        red: Math.random() > 0.7,
      };
    });
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className={`absolute bottom-0 opacity-0 
            ${p.red ? "bg-red-900/30" : "bg-white/15"}
          `}
          style={{
            left: `${p.left}%`,
            width: p.type === "line" ? "1px" : `${p.size}px`,
            height: p.type === "line" ? `${p.height}px` : `${p.size}px`,
            borderRadius: p.type === "line" ? "0px" : "9999px",
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            20% {
              opacity: 0.5;
            }
            80% {
              opacity: 0.4;
            }
            100% {
              transform: translateY(-130vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingParticles;
