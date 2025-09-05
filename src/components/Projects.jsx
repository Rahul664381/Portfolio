import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaGlobe } from "react-icons/fa";
import RestaurantFood from "../assets/r.jpg";
import Portfolio from "../assets/portrahul1.jpg";

const projects = [
  {
    title: "RestaurantFood Website",
    image: RestaurantFood,
    description:
      "Built using React.js and Tailwind CSS with reusable components, smooth navigation using React Router, and dynamic sections for food categories.",
    live: "https://rahul664381.github.io/TasteHub",
    github: "https://github.com/Rahul664381",
    technologies: ["React", "Tailwind CSS", "React Router"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "Created a personal portfolio showcasing skills, internship experience, and projects using React.js and Bootstrap. Deployed on Vercel for live access.",
    live: "https://rahul-mishra-portfolio.vercel.app/",
    github: "https://github.com/Rahul664381",
    technologies: ["React", "Bootstrap", "Vercel"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-blue-400 hover:text-red-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h2>

        {/* Projects grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center"
          // 🔹 Centered grid with 20px gap
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative w-full max-w-[400px]"
              // 🔹 Fixed width for neat alignment
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                {/* Full image with no cut */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-fill bg-black"
                  // 🔹 Full image shown without cutting
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Quick action buttons */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGlobe className="text-white text-sm" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-white text-sm" />
                  </a>
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 bg-black/70">
                  <h3 className="text-lg font-bold text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 text-center">
                    {project.description.substring(0, 60)}...
                  </p>
                  <motion.div
                    className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    View Details
                  </motion.div>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                  {project.description.substring(0, 70)}...
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {hoveredCard === index && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex justify-center items-start z-50 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-gray-800 rounded-xl p-5 max-w-lg w-full relative overflow-hidden mt-[79px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl z-10 bg-gray-700 rounded-full p-1"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>

                <div className="relative rounded-lg overflow-hidden">
                  {/* Full image in modal */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-60 object-fill bg-black"
                    // 🔹 Image inside modal also shows fully
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                </div>

                <h3 className="text-2xl font-bold text-blue-400">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-1">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo & GitHub buttons */}
                <div className="flex gap-4 justify-center mt-6">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live Demo
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:bg-gray-900 hover:scale-105 active:scale-95"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
