import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
      <Head>
        <title>Mike&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>


      <footer className="sticky bottom-2 w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <ArrowUpCircleIcon className="text-[#F7AB0A]/20 hover:text-[#F7AB0A] h-7 w-7 z-20" />
          </Link>
        </div>
      </footer>

    </div>
  );
};

export default Home;
