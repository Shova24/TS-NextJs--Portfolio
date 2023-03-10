import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import WorkExperience from "../Components/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Shova's Portfolio</title>
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
      {/* Projects  */}
      {/* Contact Me */}
    </div>
  );
}
