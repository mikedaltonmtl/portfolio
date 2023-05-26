import { motion } from "framer-motion";

interface Job {
  id: number;
  companyName: string;
  jobTitle: string;
  duration: string;
  url: string;
  summary: string[];
}

type Props = {
  key: number;
  experience: Job;
}

export default function ExperienceCard(props: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-[#292929] md:p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover object-center pt-2"
        src={props.experience.url}
      />

      <div className="mx-24 w-[300px] md:px-10 md:w-[400px]">
        <div className="w-[300px] text-center">
          <h4 className="text-xl font-light">{props.experience.companyName}</h4>
          <p className="font-semibold text-lg mt-0">{props.experience.jobTitle}</p>
          <p className="uppercase pb-2 text-gray-300">{props.experience.duration}</p>
        </div>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {props.experience.summary.map((bullet, index) => (
            <li key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}