/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icons for contact info

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Card className="w-full max-w-full bg-white">
      <CardBody>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="placeholder:text-white"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="placeholder:text-white"
            />
          </div>
          <div className="mb-4">
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="   "
            />
          </div>
          <Button
            type="submit"
            className="w-full my-1.5 text-white bg-accent hover:bg-hover hover:text-primary duration-300"
          >
            Send Message
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

const ContactCard = ({ icon, title, info }) => {
  return (
    <motion.div
      className="w-full p-6 bg-black hover:shadow-black  text-white rounded-lg  hover:shadow-sm transition-transform transform hover:rotate-3d duration-500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <Typography variant="h6" className="text-primary">
            {title}
          </Typography>
          <Typography className="text-primary">{info}</Typography>
        </div>
      </div>
    </motion.div>
  );
};

const FAQAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development and UI/UX design. Our team is skilled in various technologies and can tailor our services to meet your specific needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines can vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance packages for all our projects. This includes regular updates, security patches, and technical support to ensure your project continues to run smoothly.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on the specific requirements of each client. We offer competitive rates and will provide a detailed quote after our initial consultation and project scoping session.",
    },
  ];

  return (
    <Card className="w-full max-w-full ">
      <CardBody className="bg-white shadow-sm shadow-accent h-[20.75rem]   rounded-lg">
        <Typography
          variant="h5"
          className="mb-4 ss:text-3xl xx:text-xl text-secondary"
        >
          Frequently Asked <span className="text-accent">Questions</span>
        </Typography>
        <div className="overflow-hidden overflow-y-scroll h-[80%] ">
          {" "}
          {faqItems.map((item, index) => (
            <Accordion
              className="text-black "
              key={index}
              open={open === index + 1}
            >
              <AccordionHeader
                className="text-black text-lg "
                onClick={() => handleOpen(index + 1)}
              >
                {item.question}
                <IoMdArrowDropdown className="ml-auto" />
              </AccordionHeader>
              <AccordionBody className="text-secondary">
                {item.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default function ContactSection() {
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

  return (
    <section
      id="contact"
      className="h-auto p-8 ml-0 md:ml-64 mt-16 bg-secondary"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-full mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <Typography
            variant="h2"
            className="mb-4 ss:text-3xl xx:text-2xl text-center md:text-start text-white"
          >
            Get in <span className="text-accent">Touch</span>
          </Typography>
          <Typography
            variant="lead"
            className="text-primary ss:text-base xx:text-sm max-w-3xl"
          >
            Have a question or want to work together? Fill out the form below,
            and we'll get back to you as soon as possible.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FAQAccordion />
          </motion.div>
        </div>
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mt-12 text-primary">
          <ContactCard
            icon={<FaPhone className="text-white text-3xl" />}
            title="Phone"
            info="+2348109125793"
          />
          <ContactCard
            icon={<FaEnvelope className="text-white text-3xl" />}
            title="Email"
            info="marketinglot.blog@gmail.com"
          />
        </div>
      </motion.div>
    </section>
  );
}
