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

    </motion.section>
  );
}
