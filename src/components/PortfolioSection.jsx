/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const portfolioItems = [
  {
    title: "Dimchi",
    description: "A fully responsive website for Hair Stylists",
    image: "https://i.postimg.cc/VstYW1yR/1.jpg",
    details:
      "A single page site built with react, styled components for design and framer for animations",
    technologies: ["React", "Styled Components"],
  },
  {
    title: "The Brown Patience Company",
    description:
      "The Brown Patience Company is a writer-focused firm offering book writing",
    image: "https://i.postimg.cc/SsBmb19C/2.jpg",
    details:
      "The Brown Patience Company is a writer-focused firm offering book writing, editing, and coaching services, featuring TinyMce for streamlined blog management, Firebase for data storage and authentication, and React.js with Tailwind CSS for a responsive, user-friendly interface that enhances overall platform performance and client engagement.",
    technologies: ["Vite-ReactJs", "Firebase", "TailwindCss", "TinyMCE"],
  },
  {
    title: "React Blog Site",
    description: "A dynamic blog site that is built with vite-react",
    image: "https://i.postimg.cc/Ss2m5bnm/3.jpg",
    details:
      "A dynamic blog site that is built with vite-react , firebase as database and authentication, tailwind and css3 as the design tech and Tinymce as the cms of choice.",
    technologies: ["Vite-React", "Firebase", "TailwindCss", "TinyMCE"],
  },
  {
    title: "E-Store",
    description: "A fully responsive e-commerce website",
    image: "https://i.postimg.cc/yx0s1hh5/4.jpg",
    details:
      "A personal project application built with react to improve my skills in filtering data with different parameters   ",
    technologies: ["Vite-ReactJs", "TailwindCss", "Material-Ui"],
  },
  {
    title: "GitHub Profile Finder",
    description:
      " A simple app that allows users to search for GitHub profiles and view their details.",
    image: "https://i.postimg.cc/yYz7f5sz/5.jpg",
    details:
      "A simple app that allows users to search for GitHub profiles and view their details. It uses the GitHub API to fetch the data and displays it in a user-friendly interface.",
    technologies: [
      "Vite-ReactJs",
      "TailwindCss",
      "Material-Ui",
      "Styled-Components",
    ],
  },
  {
    title: "Online-Shop",
    description: "A personal project to improve my ui and animation skills ",
    image: "https://i.postimg.cc/LsV561TV/3.png",
    details: " A personal project to improve my ui and animation skills ",
    technologies: [
      "Vite-ReactJs",
      "TailwindCss",
      "Material-Tailwind",
      "Framer",
    ],
  },
];

const PortfolioItem = ({
  title,
  description,
  image,
  details,
  technologies,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Toggle isClicked state
  };

  return (
    <>
      <motion.div
        className="relative overflow-hidden rounded-lg cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick} // Trigger card click on mobile
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
          animate={{
            filter: isHovered || isClicked ? "blur(5px)" : "blur(0px)",
          }}
        />
        <AnimatePresence>
          {(isHovered || isClicked) && (
            <motion.div
              className="absolute inset-0 bg-secondary bg-opacity-70 flex flex-col justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Typography
                variant="h5"
                className="mb-2 text-center ss:text-2xl xx:text-xl text-white"
              >
                {title}
              </Typography>
              <Typography className="text-center mb-4 text-primary">
                {description}
              </Typography>
              <Button
                className="hover:border-accent hover:text-white font-semibold border-primary text-primary duration-300"
                variant="outlined"
                size="sm"
                onClick={() => setIsDialogOpen(true)}
              >
                Read More
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Dialog
        size="md"
        className="bg-black md:h-[100dvh] ss:h-[90dvh] xx:h-[80dvh] overflow-hidden overflow-y-scroll "
        open={isDialogOpen}
        handler={() => setIsDialogOpen(false)}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-accent  font-semibold">
          {title}
        </DialogHeader>
        <div className=" md:my-6">
          <DialogBody className="h-[40rem] ss:my-0 xx:my-[5rem]">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="xx:h-[40vh] md:h-[15rem] overflow-hidden overflow-y-scroll">
              <div className="mt-16  ">
                <Typography className="text-lg mb-4 font-semibold text-primary">
                  {description}
                </Typography>
                <Typography className="text-base mb-4  text-primary">
                  {details}
                </Typography>
                <Typography variant="h6" className="ss:mb-2 mb-6 text-primary">
                  Technologies Used:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-gray-50  text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setIsDialogOpen(false)}
              className="mr-2  text-primary bg-red-400 hover:bg-red-600 duration-300"
            >
              <span>Close</span>
            </Button>
            <Button
              className="text-secondary bg-accent hover:text-primary duration-300 "
              onClick={() => setIsDialogOpen(false)}
            >
              <a href="#">Visit Project</a>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
};

export default function PortfolioSection() {
  const [text] = useTypewriter({
    words: ["Portfolio", "Projects", "Works"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 5000,
  });
  return (
    <div className="relative">
      <section id="portfolio" className="h-auto p-8  ml-0 md:ml-64 mt-16 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-4 ss:text-3xl xx:text-2xl font-semibold md:text-start text-center text-primary">
            My
            <span className="text-accent  ml-2">
              {text}
              <Cursor cursorStyle="_" />
            </span>
          </h2>
          <Typography
            variant="lead"
            className="max-w-3xl ss:text-base xx:text-sm text-primary"
          >
            Explore a collection of my recent projects showcasing a diverse
            range of skills and technologies. Each project and work represents a
            unique challenge and innovative solution.
          </Typography>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
