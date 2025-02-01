import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = (section) => setActiveLink(section);

  // Automatically close sidebar on screens smaller than md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsOpen(true); // Keep sidebar open on md and larger
        setIsMobile(false);
      } else {
        setIsOpen(false); // Automatically close sidebar on smaller screens
        setIsMobile(true);
      }
    };

    handleResize(); // Initialize on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Logo and Toggle Button in Header (Visible on small screens) */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 py-2 bg-black text-white z-50 md:hidden shadow-md shadow-accent/40">
          {/* Logo */}
          <div className="">
            <Link
              to="/"
              className="text-white ss:text-3xl text-2xl font-semibold"
            >
              Code<span className="text-accent">Squid</span>
            </Link>
          </div>

          {/* Toggle Button */}
          <button onClick={handleToggle} className="text-white ">
            {isOpen ? (
              <FaTimes className="ss:w-8 ss:h-8 w-6 h-6" />
            ) : (
              <FaBars className="ss:w-8 ss:h-8 w-6 h-6" />
            )}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen || window.innerWidth >= 1000 ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full bg-black md:shadow-accent md:shadow  text-white w-64 z-40 ${
          isOpen ? "block" : "md:block hidden h-[100dvh]"
        }`} // Hidden by default on small screens
      >
        {/* Logo */}
        <div className="p-4 ">
          <Link className="text-white text-4xl font-bold">
            Code<span className=" text-accent">Squid</span>
          </Link>
        </div>
        {/* Sidebar Links */}
        <nav className="mt-10  ">
          <ul className="space-y-4 text-left">
            {[
              "#home",
              "#about",
              "#portfolio",
              "#services",
              "#testimonial",
              "#templates",
              "#contact",
            ].map((section, idx) => (
              <li className="text-primary" key={idx}>
                {section === "#templates" ? (
                  <a
                    href="https://shop-whatever.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block py-2 px-6 ss:px-12 md:px-4 hover:mx-4 hover:bg-primary rounded-md hover:text-secondary duration-100 ${
                      activeLink === section
                        ? "border border-accent mx-4 text-white font-semibold"
                        : ""
                    }`}
                  >
                    Templates
                  </a>
                ) : (
                  <Link
                    smooth
                    to={section}
                    onClick={() => {
                      handleLinkClick(section);
                      if (isMobile) setIsOpen(false); // Close sidebar on link click (mobile only)
                    }}
                    className={`block py-2 px-6 ss:px-12 md:px-4 hover:mx-4 hover:bg-primary rounded-md hover:text-secondary duration-100 ${
                      activeLink === section
                        ? "border border-accent mx-4 text-white font-semibold"
                        : ""
                    }`}
                  >
                    {section.replace("#", "").charAt(0).toUpperCase() +
                      section.slice(2)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-10 left-0 w-full flex pl-4 space-x-8">
          <a
            href="https://wa.me/2348109125793"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent duration-200"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="www.linkedin.com/in/victory-emmanuel-54a090234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
