import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5, delay: 0.2 }}
      whileInView={{ opacity: 1 }}
      className="ml-3 md:mb-20 md:pt-[150px] flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-center md:items-start items-center mx-auto"
    >
      <h3 className="pageName">
        &nbsp;About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="/IMG_2205.jpg"
        alt="skiing with Clara"
        className="md:mb-10 md:mt-0 mt-14 mb-2 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96
        xl:w-[333px] xl:h-[400px] border border-white"
      />

      <div className="space-y-2 md:space-y-10 px-5 md:px-10 max-w-[500px]">
        <h4 className="text-xl md:text-2xl font-semibold text-center md:text-justify">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-xs text-justify">
          Hi there! I&apos;ve Mike, a recent graduated from a Full-stack Web Dev bootcamp. I&apos;ve had a great time learning a bunch of new skills which I can&apos;t wait to put to work!<br />
          My background is in Finance, but prior to the bootcamp I was a stay-at-home-Dad, bringing up three young children. This was truly one of the best learning experiences of my life, during which time I developed some great, transferable skills such as time management, task prioritization and problem solving as well some that I hope aren&apos;t transferable, like blowing noses and changing diapers!<br />
          The bootcamp gave me plenty of hands-on experience with HTML, CSS and JavaScript; while the introduction to React was love at first sight!
        </p>
      </div>
    </motion.div>
  );
}