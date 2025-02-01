import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const FooterSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <motion.footer
      className=" text-primary py-8  md:ml-64"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className=" mx-auto p-8 ">
        <motion.div variants={itemVariants} className="text-right ">
          <Typography variant="small">
            © {new Date().getFullYear()}
            <span className="text-accent font-semibold ss:text-left xx:text-center">
              CodeSquid
            </span>
            . All rights reserved.
          </Typography>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
