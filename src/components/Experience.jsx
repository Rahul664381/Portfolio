import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const experience = [
  {
    year: "Feb 2025 - July 2025",
    role: "Frontend Development Intern",
    company: "I-Tech Skills and Solutions",
    details:
      "Developed responsive web pages using React.js, Tailwind CSS, and JavaScript. Collaborated with senior developers to debug and improve website performance.",
    icon: <FaBriefcase />,
    color: "from-blue-500 to-cyan-500",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Debugging"],
  },
];

const education = [
  {
    year: "2020",
    degree: "HSC (12th)",
    institute: "UP Board",
    icon: <FaGraduationCap />,
    color: "from-purple-500 to-pink-500",
    score: "Percentage: 67%",
  },
  {
    year: "2018",
    degree: "SSC (10th)",
    institute: "UP Board",
    icon: <FaGraduationCap />,
    color: "from-green-500 to-teal-500",
    score: "Percentage: 63.67%",
  },
];

export default function Experience() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-16 left-16 w-20 h-20 rounded-full bg-blue-500 opacity-10"
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
        className="absolute bottom-16 right-16 w-16 h-16 rounded-full bg-purple-500 opacity-10"
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-8 text-blue-300 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="p-2 bg-blue-500/20 rounded-lg">
                <FaBriefcase />
              </span>
              Experience
            </motion.h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onMouseEnter={() => setHoveredItem(`exp-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative pl-14 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-5 top-5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 ring-4 ring-gray-900 group-hover:ring-blue-500/30 transition-all duration-300 z-10"></div>

                    <motion.div
                      className={`bg-gradient-to-br ${exp.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                      }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        initial={{ x: "-100%" }}
                      />

                      {/* Icon */}
                      <div className="text-2xl mb-4 text-white">{exp.icon}</div>

                      <h4 className="text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-white/90 mt-1">
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-white/80 mt-3">
                        <FaCalendarAlt className="text-sm" />
                        <span>{exp.year}</span>
                      </div>

                      <p className="text-white/80 text-sm mt-3 leading-relaxed">
                        {exp.details}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-8 text-blue-300 flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="p-2 bg-purple-500/20 rounded-lg">
                <FaGraduationCap />
              </span>
              Education
            </motion.h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onMouseEnter={() => setHoveredItem(`edu-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative pl-14 group"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-5 top-5 w-5 h-5 rounded-full bg-gradient-to-r ${edu.color} ring-4 ring-gray-900 group-hover:ring-purple-500/30 transition-all duration-300 z-10`}
                    ></div>

                    <motion.div
                      className={`bg-gradient-to-br ${edu.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                      }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        initial={{ x: "-100%" }}
                      />

                      {/* Icon */}
                      <div className="text-2xl mb-4 text-white">{edu.icon}</div>

                      <h4 className="text-lg font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-white/90 mt-1">
                        {edu.institute}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-white/80 mt-3">
                        <FaCalendarAlt className="text-sm" />
                        <span>{edu.year}</span>
                      </div>

                      {edu.score && (
                        <div className="mt-3">
                          <p className="text-white/80 text-sm bg-white/10 inline-block px-3 py-1 rounded-full">
                            {edu.score}
                          </p>
                        </div>
                      )}

                      {/* Animated progress bar for visual interest */}
                      <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className="text-blue-200 mb-6">
            Looking for opportunities to grow and contribute
          </p>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
