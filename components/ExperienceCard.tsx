import { motion } from "framer-motion";


export default function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[550px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover object-center"
        src={experience.url}
      />

      <div className="px-0 md:px-10 w-[400px]">
        <div className="w-[300px] text-center">
          <h4 className="text-xl font-light">{experience.companyName}</h4>
          <p className="font-semibold text-lg mt-0">{experience.jobTitle}</p>
          <p className="uppercase pb-2 text-gray-300">{experience.duration}</p>
        </div>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {experience.summary.map((bullet: String, index) => (
            <li key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}