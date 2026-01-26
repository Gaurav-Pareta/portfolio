const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-red-500/20"
          style={{
            width: "3px",
            height: "3px",
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 20}%`,
            animation: `float ${5 + Math.random() * 5}s linear infinite`,
          }}
        />
      ))}

      {/* Inline keyframes (still simple, not advanced) */}
      <style>
        {`
          @keyframes float {
            from {
              transform: translateY(0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            to {
              transform: translateY(-120vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingParticles;
