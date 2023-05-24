import { motion } from "framer-motion";


export default function Projects() {

  const projects = [
    {
      id: 1,
      image: "/HH.gif",
      title: "Happy Helpers",
      description: "Finals, group project: A crowd-sourcing, volunteering app with a focus on building community through in-person interactions and mutual aid. Built with Next.js, React, Tailwind, Prisma and PostgreSQL. We also integrated the Google Maps API and the Chat Engine module.",
      url: "https://github.com/tronross/happy-helpers",
    },
    {
      id: 2,
      image: "/JavaScript.png",
      title: "Murder Mystery",
      description: ""
    },
    {
      id: 3,
      image: "/React.jpeg",
      title: "Interview Scheduler",
      description: "Helpful app to showcase skills in finals project blah blah blah lots of text to go here will copy past in from github account"
    },
  ];

  return (
    <div className="pt-[120px] md:pt-6 min-h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto z-0">
      <h3 className="pageName">
        &nbsp;Projects
      </h3>

      <div className="relative h-screen w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
        {projects.map((project, i) => (
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={ project.id }
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              src={ project.image }
              alt={ project.title }
              className="h-64 border-[#F7AB0A]/80 border-2"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-3xl text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}: { project.title }
                </span>
              </h4>
              <p className="text-lg text-justify md:text-left max-w-3xl">
                { project.description }
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* background swoosh */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
    </div>
  );
}