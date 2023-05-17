import { motion } from "framer-motion";


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:text-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="/IMG_2205.jpg"
        alt="skiing with the kids"
        className="-mb-20 md:mb-0 top-28 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[333px] xl:h-[400px] border border-white"
        viewport={{ once: true }}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-sm">
          Hi there, I&apos;ve just graduated from a Full-stack Web Dev bootcamp where I had a great time learning a bunch of new skills which I can&apos;t wait to put to work!
          My background is in Finance, but prior to the bootcamp I was a stay-at-home-Dad bringing up three young children and learning some great life skills such as time management, task prioritization, problem solving and even learning how to fold a fitted sheet!
        </p>
      </div>
    </motion.div>
  );
}