"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  const handleIconClick = () => {
    const email = "shova24.v2@gmail.com";
    const emailLink = `mailto:${email}`;
  };
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      {/* Social Icons */}
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
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/Shova24"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jannatul-ferdous-shova-3615371a9/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/jannatulferdous.shova.92"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* Avatar */}
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
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
          href="https://mail.google.com/mail/u/0/#inbox"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p
          className="hidden text-sm text-gray-400 uppercase md:inline-flex"
          onClick={handleIconClick}
        >
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
