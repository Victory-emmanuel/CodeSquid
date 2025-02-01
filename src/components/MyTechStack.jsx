/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiCanva } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const TechIcon = ({ Icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col items-center"
  >
    <Icon className={`text-4xl ${color}`} />
    <Typography variant="small" className="mt-2 text-primary">
      {name}
    </Typography>
  </motion.div>
);

const TechStack = ({ title, icons }) => (
  <Card className="w-full mb-6 bg-black">
    <CardBody>
      <Typography variant="h5" color="white" className="mb-4">
        {title}
      </Typography>
      <div className="grid grid-cols-2 gap-4">
        {icons.map((icon, index) => (
          <TechIcon key={index} {...icon} />
        ))}
      </div>
    </CardBody>
  </Card>
);

const WavyDivider2 = () => (
  <div className="absolute bottom-[-18rem] left-0 w-full overflow-hidden">
    <svg
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-[8rem]"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-accent"
      ></path>
    </svg>
  </div>
);
export default function MyTechStack() {
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

  const frontendIcons = [
    { Icon: FaReact, name: "React", color: "text-blue-500" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  ];

  const backendIcons = [
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: IoLogoFirebase, name: "Firebase", color: "text-orange-400" },
  ];

  const uiUxIcons = [
    { Icon: FaFigma, name: "Figma", color: "text-purple-500" },
    { Icon: SiCanva, name: "Canva", color: "text-blue-500" },
  ];

  return (
    <motion.section
      className="flex flex-col h-auto px-6 ss:px-12 py-16 ml-0 md:ml-64 ss:pt-[6rem] pt-[8rem] bg-secondary/70"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="techstack"
    >
      <motion.h2
        variants={itemVariants}
        className="mb-8 text-primary ss:text-3xl xx:text-2xl font-bold mt-10 text-center md:text-start"
      >
        My <span className="text-white">Tech Stack</span>
      </motion.h2>
      <motion.div variants={itemVariants} className="grid ss:grid-cols-3 gap-6">
        <TechStack title="Frontend" icons={frontendIcons} />
        <TechStack title="Backend" icons={backendIcons} />
        <TechStack title="UI/UX" icons={uiUxIcons} />
      </motion.div>
      {/* <WavyDivider2 /> */}
    </motion.section>
  );
}
