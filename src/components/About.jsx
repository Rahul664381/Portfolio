import React, { useState } from "react";
import Resume from "../assets/Rahul_Mishra.pdf";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDownload,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";
import Rahul from "../assets/Rahul.jpg";

export default function About() {
  const [imageHovered, setImageHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      color: "text-blue-400",
      bg: "bg-blue-500/20",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "text-orange-500",
      bg: "bg-orange-500/20",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      color: "text-blue-500",
      bg: "bg-blue-500/20",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      color: "text-cyan-400",
      bg: "bg-cyan-500/20",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "text-green-500",
      bg: "bg-green-500/20",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      color: "text-orange-600",
      bg: "bg-orange-600/20",
    },
    {
      icon: <SiFramer />,
      name: "Framer Motion",
      color: "text-pink-500",
      bg: "bg-pink-500/20",
    },
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.2,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-purple-500 opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 p-6 z-10">
        {/* Profile Image with enhanced hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
          }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          onHoverStart={() => setImageHovered(true)}
          onHoverEnd={() => setImageHovered(false)}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl cursor-pointer"
        >
          <img
            src={Rahul}
            alt="Rahul Mishra"
            className="w-full h-full object-cover"
          />

          {/* Animated overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: imageHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-blue-500"
          />

          {/* Shining effect on hover */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: imageHovered ? "200%" : "-100%",
              opacity: imageHovered ? 0.6 : 0,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"
          />
        </motion.div>

        {/* About Content with enhanced animations */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold mb-6 text-blue-400 relative inline-block"
          >
            About Me
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 leading-relaxed mb-4 hover:text-blue-100 transition-colors duration-300"
          >
            Motivated Frontend Developer with hands-on experience in building
            responsive and user-friendly web applications using React.js,
            Tailwind CSS, and JavaScript. Passionate about crafting modern,
            interactive UI designs and delivering high-quality web experiences.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-500 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 group"
          >
            <p className="text-blue-300 font-medium group-hover:text-blue-100 transition-colors">
              Internship Experience: I-Tech Skills and Solutions (Feb 2025 –
              July 2025)
            </p>
          </motion.div>

          {/* Skills Icons with enhanced hover effects */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className={`relative cursor-pointer p-3 rounded-full ${skill.bg} ${skill.color} text-2xl group`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill.icon}
                {hoveredSkill === skill.name && (
                  <motion.span
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {skill.name}
                  </motion.span>
                )}
                {/* Pulse effect on hover */}
                <motion.span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                  style={{ backgroundColor: "currentColor" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Download CV Button with enhanced animation */}
          <motion.a
            href={Resume}
            download={Resume}
            className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(66, 153, 225, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="mr-2 group-hover:rotate-12 transition-transform"
            >
              <FaDownload />
            </motion.div>
            Download CV
            <motion.span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
