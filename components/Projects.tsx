import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';


type Props = {}

export default function Projects({}: Props) {

  const projects = [
    1, 2, 3, 4, 5
  ];

  return (
    <>
      <div className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
          &nbsp;Projects
        </h3>

        <div className="relative h-screen w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
          {projects.map((project, i) => (
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              key={project}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            >
              <motion.img
                initial={{ opacity: 0, y: -300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="/profile.jpeg"
                alt=""
                className="h-64"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}: Happy Helpers
                  </span>
                </h4>
                <p className="text-lg text-justify md:text-left">
                  Helpful app to showcase skills in finals project
                  blah blah blah
                  lots of text to go here
                  will copy past in from github account
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
      </div>

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