import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {}

export default function Experience({}: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative min-h-screen text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        &nbsp;Experience
      </h3>

      <div className="w-full min-h-screen flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>

    </motion.div>
  );
}