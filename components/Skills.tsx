import { motion } from "framer-motion";
import Skill from "./Skill";

const skills = [
  { url: "/JavaScript.png", name: "JavaScript" },
  { url: "/HTML.png", name: "HTML 5" },
  { url: "/CSS3.png", name: "CSS 3" },
  { url: "/React.jpeg", name: "React.js" },
  { url: "/NextJS.jpeg", name: "Next.js" },
  { url: "/NodeJS.png", name: "Node.js" },
  { url: "/Tailwind.png", name: "Tailwind" },
  { url: "/Bootstrap.png", name: "Bootstrap" },
  { url: "/GitHub.webp", name: "GitHub" },
  { url: "/PostgreSQL.png", name: "PostgreSQL" },
  { url: "/SQL.jpeg", name: "SQL" },
  { url: "/Rails.png", name: "Ruby on Rails" },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="ml-3 pt-[0px] md:pt-12 min-h-screen relative flex flex-col justify-center text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 xl:space-y-0 mx-auto items-center"
    >
      <h3 className="pageName">
        &nbsp;Skills
      </h3>

      <div className="grid grid-cols-3 gap-5">
        {/* split skills into two groups for entrance direction */}
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill
            key={ skill.name }
            url={ skill.url }
            name={ skill.name }
          />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={ skill.name }
            url={ skill.url }
            name={ skill.name }
            directionLeft
          />
        ))}
      </div>
    </motion.div>
  );
}