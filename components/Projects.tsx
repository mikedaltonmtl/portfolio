import { motion } from "framer-motion";
import Link from 'next/link';


export default function Projects() {

  const projects = [
    {
      id: 1,
      image: "/HH.gif",
      title: "Happy Helpers",
      description: "Finals, group project: A crowd-sourcing, volunteering app with a focus on building community. Built with Next.js, React, Tailwind, Prisma and PostgreSQL. Includes Google Maps API and Chat Engine integration.",
      url: "https://happy-helpers-static.vercel.app/",
    },
    {
      id: 2,
      image: "/mystery.gif",
      title: "Murder Mystery",
      description: "2D Sprite Animation: Murder Mystery game. Built with JavaScript running on Express Server, adapted from Pizza Legends YouTube tutorial.",
      url: "https://pizza-mystery.netlify.app",

    },
    {
      id: 3,
      image: "/scheduler.gif",
      title: "Interview Scheduler",
      description: "React SPA: A single-page application that allows students to book technical interviews with mentors. The front end is built with React.js and makes API requests to fetch and store appointment data from a ProgreSQL database.",
      url: "https://scheduler-z3gj.onrender.com",
    },
    {
      id: 4,
      image: "/donut.png",
      title: "The Donut Company",
      description: "Midterms, group project: A commerce app that allows a restaurant to communicate with it's clients over SMS. Writen in JavaScript using JQuery, AJAX, SASS and Twilio, with Express Server and PostgreSQL on the back end.",
      url: "https://donut-company.onrender.com",
    },
    {
      id: 5,
      image: "/tweeter.jpeg",
      title: "Tweeter",
      description: "Single-page Twitter clone: Each student was given starter code for this project to sharpen their HTML, CSS, JS, jQuery and AJAX front end skills, and their Node.js and Express back end skills.",
      url: "https://next-tweeter-neon.vercel.app/",
    },
    {
      id: 6,
      image: "/DogArt.gif",
      title: "DogArt",
      description: "Photo Gallery to collate pictures of our new puppy. Next 13, Tailwind and CSS with responsive design for phone screens.",
      url: "https://dogart.vercel.app/",
    },
  ];

  return (
    <div className="pt-[0px] md:pt-6 h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full md:justify-evenly mx-auto z-0">
      <h3 className="pageName">
        &nbsp;Projects
      </h3>

      <div className="relative h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
        {projects.map((project, i) => (

          <div
            key={ project.id }
            className="md:pt-32 pt-32 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              src={ project.image }
              alt={ project.title }
              className="md:h-64 h-48 border-[#F7AB0A]/80 border-2"
            />
            <div className="space-y-5 px-10 md:px-10 max-w-6xl">
              <h4 className="md:text-3xl text-xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}: { project.title }
                  <Link href={project.url} target="_blank">
                    <svg className="newTabIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </span>
              </h4>
              <p className="text-sm md:text-lg text-justify md:text-left md:max-w-3xl">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* background swoosh */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
    </div>
  );
}