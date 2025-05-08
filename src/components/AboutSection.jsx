/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../assets/Victory-CV.pdf";

const CircularProgressBar = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle

  return (
    <div className="relative w-32 h-32 ">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-white"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-accent"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          initial={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset:
              circumference - (percentage / 100) * circumference,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Typography variant="h4">{percentage}%</Typography>
      </div>
    </div>
  );
};


export default function AboutSection() {
  const [text] = useTypewriter({
    words: ["Expertise", "Skills"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
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
        className="flex flex-col md:flex-row items-center justify-between h-auto p-8 ml-0 ss:pt-[6rem] pt-[8rem] md:ml-64 bg-secondary "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="about"
      >
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 md:mx-0 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "backInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:mx-0 mx-auto"
          >
            <motion.h2
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "backInOut" }}
              className="mb-4 text-primary ss:text-3xl xx:text-2xl  ss:mt-10  font-bold text-center md:text-start"
            >
              About <span className="text-white">Me</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            variants={itemVariants}
            className="md:mx-0 mx-auto"
          >
            <h5 className="text-primary text-xl text-start  font-semibold mt-12 mb-4">
              Hi, i'm <span className="text-white">Victory Emmanuel</span>
            </h5>
            <Typography
              variant="lead"
              className="mb-8 text-primary ss:text-base xx:text-sm"
            >
              Self-taught front-end developer with a strong foundation in web
              development acquired through dedicated self-learning and hands-on
              projects. Committed to continous improvement, I maintain an
              updated skill set and showcase my technical prowess through a
              portfolio demonstrating responsive and visually engaging web
              interfaces.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            variants={itemVariants}
          >
            <h5 className="text-primary text-xl font-semibold mt-12 mb-4">
              My
              <span className="text-white  ml-2">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h5>
            <Typography
              variant="lead"
              className="mb-8 ss:text-base xx:text-sm text-primary"
            >
              Passionate about crafting responsive, user-friendly websites using
              modern frameworks and clean code practices.
            </Typography>
          </motion.div>

          <motion.div
            className="mt-12"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="grid font-semibold text-primary grid-cols-2 gap-8 md:justify-items-start justify-items-center ss:text-base text-sm">
              <div className="grid grid-cols-1 gap-2 justify-items-center">
                <h5 className="">ReactJs</h5>
                <CircularProgressBar percentage={95} />
              </div>
              <div className="grid grid-cols-1 gap-2 justify-items-center">
                <h5 className="">TW-CSS</h5>
                <CircularProgressBar percentage={85} />
              </div>
              <div className="grid grid-cols-1 gap-2 justify-items-center">
                <h5 className="">Figma</h5>
                <CircularProgressBar percentage={75} />
              </div>
              <div className="grid grid-cols-1 gap-2 justify-items-center">
                <h5 className="">Material-TW</h5>
                <CircularProgressBar percentage={90} />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-fit mt-12 mx-auto md:mx-0"
          >
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-accent rounded-md  mx-auto  font-semibold text-primary hover:bg-transparent border border-accent hover:border-primary hover:border px-6 py-2 duration-300"
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
          className="md:w-[35rem] md:h-[50rem] pl-8"
          variants={itemVariants}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <motion.div
            style={{
              background: `url("https://i.postimg.cc/j2NRGBK2/2151645693.jpg") no-repeat center center/cover`,
            }}
            className="w-[100%] h-[100%] rounded-lg  ml-auto shadow-lg shadow-accent" // Set a fixed height here
          ></motion.div>
        </motion.div>
      </motion.section>
     
    </div>
  );
}
