import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';


export default function ScrollToTop() {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const containerDiv = document.getElementById("container") || null;
    
    const updatePosition = () => {
      if (containerDiv) {
        setScrollPosition(containerDiv?.scrollTop);
      }
    };

    if (containerDiv) {
      containerDiv.addEventListener("scroll", updatePosition);
      return () => containerDiv.removeEventListener("scroll", updatePosition);
    }
  }, []);


  return (
    <AnimatePresence>
      {scrollPosition > 200 && (
        <motion.button
          className="scrollToTop-btn"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 1 }}
        >
          <div className="flex items-center justify-center">
            <Link href="#hero">
              <ArrowUpCircleIcon className="text-[#F7AB0A]/20 hover:text-[#F7AB0A] h-7 w-7 z-20" />
            </Link>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}