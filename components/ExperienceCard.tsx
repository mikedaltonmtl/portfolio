import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover object-center"
        src="/ISI.png"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Company Name</h4>
        <p className="font-bold text-2xl mt-0">Job Title</p>

        <p className="uppercase py-2 text-gray-300">To/From Dates</p>

        <ul className="list-disc space-y-2 ml-5 text-base">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>

      </div>
    </article>
  );
}