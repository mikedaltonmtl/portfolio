import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';


export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/mike-dalton-4a002224/"
          fgColor="gray"
          bgColor="transparent"
          title="LinkedIn"
        />
        <SocialIcon
          url="https://github.com/mikedaltonmtl"
          fgColor="gray"
          bgColor="transparent"
          title="GitHub"
        />
        <span className="h-[50px] w-[50px] flex justify-center items-center">
          <SocialIcon
            url="https://discord.com/users/778371798575611944"
            network="discord"
            fgColor="transparent"
            bgColor="gray"
            style={{ height: 27, width: 27, }}
            title="Discord"
          />
        </span>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
          title="contact"
        />
        
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Contact
          </p>
        </Link>
      </motion.div>
    </header>
  );
}