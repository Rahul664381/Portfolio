import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
  FaBug,
  FaPlug,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    color: "from-red-500 to-orange-500",
    icon: <FaHtml5 />,
    hoverColor: "hover:shadow-red-500/40",
  },
  {
    name: "CSS",
    color: "from-blue-500 to-cyan-500",
    icon: <FaCss3Alt />,
    hoverColor: "hover:shadow-blue-500/40",
  },
  {
    name: "JavaScript",
    color: "from-yellow-400 to-yellow-600",
    icon: <FaJs />,
    hoverColor: "hover:shadow-yellow-500/40",
  },
  {
    name: "React.js",
    color: "from-blue-400 to-indigo-600",
    icon: <FaReact />,
    hoverColor: "hover:shadow-indigo-500/40",
  },
  {
    name: "Tailwind CSS",
    color: "from-cyan-400 to-teal-500",
    icon: <SiTailwindcss />,
    hoverColor: "hover:shadow-cyan-500/40",
  },
  {
    name: "Bootstrap",
    color: "from-purple-400 to-pink-500",
    icon: <SiBootstrap />,
    hoverColor: "hover:shadow-purple-500/40",
  },
  {
    name: "Git & GitHub",
    color: "from-gray-700 to-gray-900",
    icon: (
      <>
        <FaGitAlt className="inline" /> <FaGithub className="inline" />
      </>
    ),
    hoverColor: "hover:shadow-gray-500/40",
  },
  {
    name: "Responsive Design",
    color: "from-green-400 to-emerald-500",
    icon: <FaMobileAlt />,
    hoverColor: "hover:shadow-green-500/40",
  },
  {
    name: "Debugging",
    color: "from-pink-400 to-rose-500",
    icon: <FaBug />,
    hoverColor: "hover:shadow-pink-500/40",
  },
  {
    name: "API Integration",
    color: "from-indigo-400 to-violet-600",
    icon: <FaPlug />,
    hoverColor: "hover:shadow-violet-500/40",
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 rounded-full bg-blue-500 opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-purple-500 opacity-10"
        animate={{
          scale: [1.3, 1, 1.3],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => {
                setHoveredSkill(skill.name);
                setActiveSkill(skill.name);
              }}
              onMouseLeave={() => {
                setHoveredSkill(null);
                setTimeout(() => setActiveSkill(null), 200);
              }}
              className="relative"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="12px"
                scale={1.05}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className={`rounded-xl bg-gradient-to-br ${skill.color} p-4 text-center font-semibold text-lg cursor-pointer shadow-lg ${skill.hoverColor} transition-all duration-300 group h-24 flex flex-col items-center justify-center relative overflow-hidden`}
              >
                {/* Skill icon with enhanced hover effect */}
                <motion.div
                  className="text-2xl mb-2"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill name with color transition */}
                <span className="text-sm font-medium transition-all duration-300 group-hover:text-white group-hover:font-bold">
                  {skill.name}
                </span>

                {/* Hover effect overlay with gradient */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Particle effects on hover */}
                {activeSkill === skill.name && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white opacity-70"
                        initial={{
                          scale: 0,
                          opacity: 0,
                          x: "50%",
                          y: "50%",
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 0.7, 0],
                          x: [
                            `${50 + Math.cos((i * 72 * Math.PI) / 180) * 30}%`,
                            `${50 + Math.cos((i * 72 * Math.PI) / 180) * 50}%`,
                          ],
                          y: [
                            `${50 + Math.sin((i * 72 * Math.PI) / 180) * 30}%`,
                            `${50 + Math.sin((i * 72 * Math.PI) / 180) * 50}%`,
                          ],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  initial={{ x: "-100%" }}
                />
              </Tilt>

              {/* Floating indicator when hovered */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-lg"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-blue-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated proficiency bars for visual interest */}
        <motion.div
          className="mt-12 flex flex-col gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-blue-300">Proficiency Level</span>
            <span className="text-purple-300">Mastering New Skills</span>
          </div>

          <div className="h-3 bg-gray-700 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 2, delay: 0.7 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
            >
              {/* Animated shine effect on progress bar */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.div>

            {/* Floating circles along the progress bar */}
            {[0, 30, 60, 85].map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-500 top-1/2 -translate-y-1/2"
                style={{ left: `${position}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.2, type: "spring" }}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <motion.p
            className="text-blue-200 mb-4"
            animate={{
              textShadow: [
                "0 0 5px rgba(59,130,246,0.5)",
                "0 0 15px rgba(59,130,246,0.8)",
                "0 0 5px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Continuously learning and expanding my skill set
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white relative overflow-hidden"
          >
            <span className="relative z-10">Explore My Projects</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {/* Button shine effect */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
