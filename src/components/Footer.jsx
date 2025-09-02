import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaHeart,
  FaRegCopyright,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isTopHovered, setIsTopHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rahul-mishra-4a7529376",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/40",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/rahul664381",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-500/40",
      name: "GitHub",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/rahulmishra",
      color: "from-blue-400 to-blue-500",
      hoverColor: "hover:shadow-blue-400/40",
      name: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/code_software8700/",
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:shadow-pink-500/40",
      name: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute bottom-10 left-5 w-16 h-16 rounded-full bg-blue-500 opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-8 right-8 w-14 h-14 rounded-full bg-purple-500 opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Rahul Mishra
            </h3>
            <p className="text-sm leading-relaxed">
              Frontend Developer passionate about creating interactive and
              user-friendly web applications. Let's build something amazing
              together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`p-3 rounded-full bg-gradient-to-br ${social.color} shadow-lg ${social.hoverColor} transition-all duration-300 group relative overflow-hidden`}
                >
                  {social.icon}

                  {/* Hover effect overlay */}
                  <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    initial={{ x: "-100%" }}
                  />

                  {/* Tooltip */}
                  {hoveredIcon === social.name && (
                    <motion.span
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {social.name}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaEnvelope className="text-blue-400 text-sm" />
                </div>
                <span className="text-sm group-hover:text-blue-400 transition-colors duration-300">
                  rm4888752@gmail.com
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                  <FaPhone className="text-green-400 text-sm" />
                </div>
                <span className="text-sm group-hover:text-green-400 transition-colors duration-300">
                  +91 7651820239
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-purple-400 text-sm" />
                </div>
                <span className="text-sm group-hover:text-purple-400 transition-colors duration-300">
                  Nallasopara East, Vasai,Palghar,<br></br>Maharashtra - 401209
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-sm">
              Subscribe to my newsletter for updates and new projects.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              />
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Copyright */}
          <div className="text-sm text-center md:text-left flex items-center gap-1">
            <FaRegCopyright className="inline text-blue-400" />
            <span>{new Date().getFullYear()} Rahul Mishra.</span>
            <span className="hidden sm:inline"> All Rights Reserved.</span>
            <span className="mx-1">Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#9CA3AF", "#EF4444", "#9CA3AF"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-red-500"
            >
              <FaHeart className="inline" />
            </motion.span>
          </div>

          {/* Back-to-Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.1,
              y: -3,
              boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsTopHovered(true)}
            onMouseLeave={() => setIsTopHovered(false)}
            className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              animate={{
                y: isTopHovered ? [-2, 2, -2] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: isTopHovered ? Infinity : 0,
              }}
            >
              <FaArrowUp className="text-white text-lg" />
            </motion.div>

            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              initial={{ x: "-100%" }}
            />

            {/* Tooltip */}
            {isTopHovered && (
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Back to Top
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Footer top border animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </footer>
  );
};

export default Footer;
