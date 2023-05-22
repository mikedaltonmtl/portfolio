import { motion } from "framer-motion";
import Skill from "./Skill";
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';


type Props = {}

export default function Skills({}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
          &nbsp;Skills
        </h3>

        <div className="grid grid-cols-4 gap-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
      
      <motion.footer
        initial={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        whileInView={{ opacity: 1, scale: 1.0 }}
        className="sticky bottom-2 w-full"
      >
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <ArrowUpCircleIcon className="text-[#F7AB0A]/20 hover:text-[#F7AB0A] h-7 w-7 z-20" />
          </Link>
        </div>
      </motion.footer>
    </>
  );
}