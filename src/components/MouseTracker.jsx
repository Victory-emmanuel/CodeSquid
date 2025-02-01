import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [class*="hover"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-accent bg-accent opacity-50 pointer-events-none z-50 "
        style={{
          translateX: mousePosition.x - 20,
          translateY: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-50"
        style={{
          translateX: mousePosition.x - 4,
          translateY: mousePosition.y - 4,
        }}
      />
    </>
  );
};

export default MouseTracker;
