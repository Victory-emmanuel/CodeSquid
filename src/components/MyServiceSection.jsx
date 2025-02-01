/* eslint-disable react/prop-types */

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from "@material-tailwind/react";

const CircularProgressBar = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-primary"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <motion.circle
          className=""
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
          animate={{
            strokeDashoffset:
              circumference - (percentage / 100) * circumference,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Typography variant="h6" color="blue-gray">
          {percentage}%
        </Typography>
      </div>
    </div>
  );
};

const ServiceCard = ({
  title,
  description,
  details,
  icon: Icon,
  percentage,
  onLearnMore,
  image,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      whileTap={{ cursor: "grabbing" }}
      className="cursor-grab"
    >
      <Card className="w-full h-full bg-primary hover:bg-accent group duration-1000">
        <CardBody>
          <Icon className="w-12 h-12 text-primary group-hover:text-primary mb-4" />
          <Typography
            variant="h5"
            className="mb-2 xx:text-lg ss:text-2xl text-secondary  group-hover:text-white"
          >
            {title}
          </Typography>
          <Typography className="mb-4 xx:text-base ss:text-xl  text-secondary group-hover:text-primary">
            {description}
          </Typography>
          <div className="group-hover:text-primary text-accent">
            <CircularProgressBar percentage={percentage} />
          </div>
          <p className="text-base mt-4 mb-2 line-clamp-2 group-hover:text-primary text-secondary">
            {details}
          </p>
        </CardBody>
        <CardFooter className="pt-0 group-hover:text-white text-secondary">
          <Typography
            variant="small"
            className="cursor-pointer font-medium border-b-2 hover:border-t-2 hover:border-b-0 duration-100 border-secondary group-hover:border-white py-2 inline-block"
            onClick={onLearnMore}
          >
            Learn More
          </Typography>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServiceModal = ({ isOpen, onClose, service }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          className="bg-secondary md:w-[80rem] ss:w-[100%] ss:p-6 xx:p-4 shadow-lg group shadow-secondary m-8 "
          open={isOpen}
          handler={onClose}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className="text-white xx:text-xl ss:text-3xl">
            {service.title}
          </DialogHeader>
          <DialogBody className="md:overflow-auto overflow-hidden overflow-y-scroll xx:h-auto ss:h-[50dvh] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-[20rem] h-[15rem] rounded-lg object-cover "
                />
              </div>
              <div>
                <Typography className="xs:text-lg xx:text-base mb-4 text-primary font-semibold">
                  {service.description}
                </Typography>
                <Typography className="ss:text-base xx:text-sm  mb-4 text-primary">
                  {service.details}
                </Typography>
                <Typography className="text-sm text-white">
                  Our expertise level: {service.percentage}%
                </Typography>
                <div className="mt-4">
                  <Button
                    variant="text"
                    onClick={onClose}
                    size="md"
                    className="mr-2 xx:my-2  xs:my-0 text-primary bg-red-400 hover:bg-red-600"
                  >
                    <span>Close</span>
                  </Button>
                  <Button
                    className="text-primary xx:my-2  xs:my-0 bg-accent"
                    onClick={onClose}
                    size="md"
                  >
                    <a href="#" className="">
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const services = [
  {
    title: "Web Development",
    description: "Create stunning websites",
    details:
      "Our web development service focuses on creating responsive, user-friendly, and visually appealing websites. We use the latest technologies and best practices to ensure your site is fast, secure, and optimized for search engines.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    percentage: 95,
    image: "https://i.postimg.cc/RCkLtr0d/10805857-4478838.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive user experiences",
    details:
      "Our UI/UX design service focuses on creating beautiful, intuitive interfaces that enhance user engagement and satisfaction. We combine aesthetics with functionality to deliver designs that not only look great but also provide seamless user experiences.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    percentage: 90,
    image: "https://i.postimg.cc/Pr1zz6pj/16688185-5783930.jpg",
  },
];

export default function MyServiceSection() {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.section
      className=" h-auto p-8 ml-0 md:ml-64 mt-16 bg-secondary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="services"
    >
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        variants={itemVariants}
        className="mb-12 "
      >
        <Typography
          variant="h2"
          className="mb-4 ss:text-3xl xx:text-2xl md:text-start text-center text-primary"
        >
          What <span className="text-accent">I</span> Offer
        </Typography>
        <Typography
          variant="lead"
          className=" max-w-3xl ss:text-base xx:text-sm text-primary"
        >
          We offer a wide range of services to help your business grow and
          succeed in the digital world. Our team of experts is dedicated to
          delivering high-quality solutions tailored to your needs.
        </Typography>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 "
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            onLearnMore={() => handleLearnMore(service)}
          />
        ))}
      </motion.div>
      <ServiceModal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        service={selectedService || {}}
      />
    </motion.section>
  );
}
