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
          className="group text-gray-400 hover:text-red-400 transition"
        >
          {variant === "icon" ? (
            <i
              className={`${item.icon} text-xl 
              group-hover:scale-110 transition-transform`}
            ></i>
          ) : (
            <span className="relative text-sm">
              {item.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-500 
                transition-all duration-300 group-hover:w-full"
              />
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
