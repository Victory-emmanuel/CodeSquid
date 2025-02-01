/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Brown Patience",
    role: "Writer and Author",
    avatar: "https://i.postimg.cc/ncz1xMZ4/untitled-1082-01-jpeg.jpg",
    content:
      " I've had the pleasure of working with this company on several projects, and their attention to detail and commitment to excellence are truly commendable. They consistently deliver top-notch results and go above and beyond to ensure customer satisfaction.",
  },
  {
    id: 2,
    name: "Dimchi",
    role: "Hair Stylist",
    avatar: "https://i.postimg.cc/tR1dcyQb/user.png",
    content:
      "The level of expertise and professionalism displayed by this team is truly remarkable. They have consistently exceeded our expectations and delivered outstanding results.",
  },
  {
    id: 3,
    name: "Zainab",
    role: "Product Marketer",
    avatar: "https://i.postimg.cc/tR1dcyQb/user.png",
    content:
      "Nice work, I'm impressed with the quality of the product. I highly recommend this company to anyone looking for top-notch services.",
  },
];

const TestimonialCard = ({ testimonial, isFocused }) => {
  return (
    <motion.div
      className={`w-full  max-w-sm mx-auto ${isFocused ? "z-10" : "z-0"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isFocused ? 1 : 0.6,
        scale: isFocused ? 1 : 0.8,
        filter: isFocused ? "blur(0px)" : "blur(4px)",
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isFocused ? 1.05 : 1 }}
    >
      <Card className="w-full shadow-lg">
        <CardBody>
          <Typography variant="h6" className="mb-4 ss:text-base text-sm">
            "{testimonial.content}"
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              size="lg"
              variant="circular"
              src={testimonial.avatar}
              alt={testimonial.name}
              className="mr-4"
            />
            <div>
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography color="gray" className="font-normal">
                {testimonial.role}
              </Typography>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default number of visible cards

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleCards(3); // 3 cards on large screens, this number must not be higher than the number of testimonials
      } else if (screenWidth >= 800) {
        setVisibleCards(2); // 2 cards on medium screens
      } else {
        setVisibleCards(1); // 1 card on small screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center items-center space-x-4">
        {getVisibleTestimonials().map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isFocused={index === 0}
          />
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between  z-10">
        <IconButton
          variant="text"
          size="lg"
          onClick={prevTestimonial}
          className="rounded-full text-accent "
        >
          <ChevronLeftIcon
            strokeWidth={2}
            className="w-6 h-6 md:mt-0 xx:mt-6 "
          />
        </IconButton>
        <IconButton
          variant="text"
          size="lg"
          onClick={nextTestimonial}
          className="rounded-full text-accent"
        >
          <ChevronRightIcon
            strokeWidth={2}
            className="w-6 h-6 md:mt-0 xx:mt-6"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="h-auto p-8 ml-0 md:ml-64 mt-16 flex flex-col  justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="mb-12 "
      >
        <Typography
          variant="h2"
          className="mb-4  ss:text-3xl xx:text-2xl text-center md:text-start text-white"
        >
          What Our <span className="text-accent">Clients</span> Say
        </Typography>
        <Typography
          variant="lead"
          className="ss:text-base xx:text-sm text-white"
        >
          Don't just take our word for it. Here's what some of our valued
          clients have to say about their experience working with us.
        </Typography>
      </motion.div>
      <TestimonialCarousel />
    </section>
  );
}
