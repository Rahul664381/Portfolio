import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import * as THREE from "three";
import Rahul from "../assets/Rahul.jpg";
import Resume from "../assets/Rahul_Mishra.pdf";

// Pulse + Gradient CSS
const style = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradientShift {
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}
@keyframes gradientPulseLayer {
  0% { transform: scale(0.9); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.2; }
  100% { transform: scale(0.9); opacity: 0.6; }
}
@keyframes floatingPulse {
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
  100% { transform: translateY(0px) scale(1); }
}
.pulse-layer {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: linear-gradient(45deg, #3b82f6, #ec4899, #facc15, #06b6d4);
  filter: blur(20px);
  opacity: 0.5;
  animation: gradientPulseLayer 2.5s ease-in-out infinite, floatingPulse 5s ease-in-out infinite;
}
.pulse-layer:nth-child(2) {
  animation-delay: 0.5s, 0s;
  filter: blur(35px);
  opacity: 0.4;
}
.pulse-layer:nth-child(3) {
  animation-delay: 1s, 0.2s;
  filter: blur(50px);
  opacity: 0.3;
}
`;

function Particles({ mouse }) {
  const pointsRef = useRef();
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001 + mouse.current[0] * 0.002;
      pointsRef.current.rotation.x += 0.0005 + mouse.current[1] * 0.002;
      const color = new THREE.Color(
        `hsl(${(mouse.current[0] + 1) * 180}, 70%, 60%)`
      );
      pointsRef.current.material.color = color;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} />
    </points>
  );
}

function InteractiveSphere({ mouse }) {
  const sphereRef = useRef();
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005 + mouse.current[0] * 0.01;
      sphereRef.current.rotation.x += 0.002 + mouse.current[1] * 0.01;
      sphereRef.current.material.distort = 0.4 + mouse.current[1] * 0.2;
    }
  });
  return (
    <Sphere ref={sphereRef} args={[1.5, 100, 200]} scale={1.8}>
      <MeshDistortMaterial color="#3b82f6" distort={0.4} speed={2} />
    </Sphere>
  );
}

function FloatingIcons() {
  const icons = [
    { Icon: FaGithub, url: "https://github.com/Rahul664381" },
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/in/rahul-mishra-4a7529376",
    },
    { Icon: FaReact, url: "#" },
  ];

  return (
    <div className="absolute bottom-10 flex gap-6 z-20">
      {icons.map(({ Icon, url }, i) => (
        <motion.a
          key={i}
          href={url}
          target={url !== "#" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 p-3 rounded-full bg-gray-800 bg-opacity-50 backdrop-blur-sm"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}

export default function Hero() {
  const mouse = useRef([0, 0]);
  const haloRef = useRef();

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    mouse.current = [x, -y];

    if (haloRef.current) {
      haloRef.current.style.transform = `translate(${x * 15}px, ${-y * 15}px)`;
    }
  };

  return (
    <>
      <style>{style}</style>
      <section
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Gradient */}
        <motion.div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 animate-gradientShift" />

        {/* 3D Canvas */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <InteractiveSphere mouse={mouse} />
            <Particles mouse={mouse} />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-20 px-4">
          {/* Profile Image with Floating Halo */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full z-20">
            <div ref={haloRef} className="pulse-layer"></div>
            <div ref={haloRef} className="pulse-layer"></div>
            <div ref={haloRef} className="pulse-layer"></div>
            <img
              src={Rahul}
              alt="Rahul Mishra"
              className="w-full h-full object-cover rounded-full border-4 border-blue-500 relative z-10"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 
                         hover:from-pink-500 hover:to-yellow-400 transition-all duration-700"
            >
              Rahul Mishra
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-2xl mt-3 text-gray-300 min-h-[2.5rem] whitespace-pre-line hover:text-blue-400 transition-colors duration-500"
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React.js Enthusiast",
                  "Building Modern &\nInteractive Web Experiences",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-6 mt-6 justify-center md:justify-start flex-wrap"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-105 transition duration-300 shadow-lg font-medium"
              >
                Hire Me
              </a>
              {/* <a
                href="Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-400 rounded-full hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-105 transition duration-300 shadow-lg font-medium"
              >
                View Resume
              </a> */}

              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-400 rounded-full hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-105 transition duration-300 shadow-lg font-medium"
              >
                View Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating Social Icons */}
        <FloatingIcons />
      </section>
    </>
  );
}
