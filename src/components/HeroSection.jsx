/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../assets/Victory-CV.pdf";

import WaveDivider2 from "../Universal/WaveDivider2";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["UX DESIGNER", "DEVELOPER", "WEB DESIGNER"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 5000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative">
      <motion.section
        className=" relative flex xx:flex-col md:flex-row items-center ss:justify-between lg:min-h-screen h-auto lg:py-8 lg:px-8 md:py-4 md:px-4  xx:py-24  xx:px-8 ml-0 md:ml-64"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        id="home"
      >
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 lg:pr-4 md:pr-2"
          variants={itemVariants}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary  "
          >
            <h1 className="mb-4 lg:text-5xl sm:text-4xl xs:text-3xl xx:text-2xl md:text-left xx:text-center font-bold">
              HI, I'M VICTORY
              <br />A CREATIVE
              <span className="text-accent pl-3">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h1>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="xx:w-[100%] md:w-[80%]"
          >
            <Typography
              variant="lead"
              className="mb-8 md:text-left xx:text-center text-primary lg:text-lg ss:text-base xx:text-sm xx:w-[100%] "
            >
              I am a passionate frontend engineer with over 2 years of
              experience freelancing, specializing in creating beautiful,
              responsive web applications using modern technologies and best
              practices to deliver exceptional user experiences.
            </Typography>
          </motion.div>
          <motion.div className="flex xs:flex-row flex-col xs:items-center  md:item-left gap-6 my-4 md:mb-0">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-accent rounded-md font-semibold ss:ml-auto md:mx-0 mx-auto  text-primary hover:bg-transparent border border-accent hover:border-primary hover:border px-6 py-2 duration-300"
            >
              <a href="" className="">
                Contact Me
              </a>
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-accent rounded-md  mr-auto md:mx-0 xx:hidden ss:block  font-semibold text-primary hover:bg-transparent border border-accent hover:border-primary hover:border px-6 py-2 duration-300"
            >
              <a
                href={resume}
                download=""
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Download CV
              </a>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className=" h-auto "
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "backInOut", duration: 0.5 }}
        >
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ ease: "backInOut", duration: 0.75 }}
            style={{
              background: `url("https://i.postimg.cc/mkndpQzM/IMG-20250127-WA0011-2.jpg") no-repeat center center/cover`,
            }}
            className="sm:w-[25rem] sm:h-[25rem] xs:w-[18rem] xs:h-[18rem] xx:w-[15rem] xx:h-[15rem]  rounded-full shadow-lg ml-auto border-4 border-accent" // Set a fixed height here
          ></motion.div>
        </motion.div>
      </motion.section>
      <WaveDivider2 />
    </div>
  );
}
