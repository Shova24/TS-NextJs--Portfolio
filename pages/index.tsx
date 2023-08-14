import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import WorkExperience from "../Components/WorkExperience";
import Skills from "../Components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-scroll z-0">
      <Head>
<<<<<<< HEAD
        <title>Shova{`&apos;`}s Portfolio</title>
=======
        <title>Shova&apos;s Portfolio</title>
>>>>>>> cfa1defbedb6ab1da5794c2604a34c5aee1f9e76
      </Head>
      {/* Header */}
      <Header />

      {/* Hero  */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About  */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id='experienced' className="snap-center">
        <WorkExperience/>
      </section>
      {/* Skills */}
      <section id='skills' className="snap-start">
        <Skills/>
      </section>
      {/* Projects  */}
      {/* Contact Me */}
    </div>
  );
}
