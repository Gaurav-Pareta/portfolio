import { socialLinks } from "../data/socialLinks";

const SocialLinks = ({ variant = "icon" }) => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="
            group relative
            text-gray-400 hover:text-red-400
            transition-all duration-300 ease-out
            hover:-translate-y-1
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400
          "
        >
          {variant === "icon" ? (
            <i
              className={`
                ${item.icon} text-xl
                transition-transform duration-300 ease-out
                group-hover:scale-125
                group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
              `}
            ></i>
          ) : (
            <span className="relative text-sm font-medium">
              {item.name}

              {/* underline */}
              <span
                className="
                  absolute -bottom-1 left-1/2
                  w-0 h-[2px] bg-red-500
                  transition-all duration-300 ease-out
                  group-hover:w-full group-hover:left-0
                "
              />
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
