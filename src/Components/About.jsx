import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../CSS/About.css";

function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div id="mainCon">
      {/* Animated Background Elements */}
      <motion.div
        className="bg-gradient-orb orb-1"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="bg-gradient-orb orb-2"
        style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div className="topTitle" style={{ opacity }}>
        <motion.img
          src="/TabIcon.png"
          alt="portfolio Logo"
          id="plogo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.6 },
          }}
        />

        <motion.p
          id="nameDet"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hey, I'm Abdul Noorul Akhlaq Khan
        </motion.p>

        <motion.p
          id="Jtitle"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A Web Developer <br />& UI/UX Enthusiast
        </motion.p>

        <motion.p
          id="portTagLine"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Full Stack Web Developer dedicated to crafting dynamic, responsive,
          and performance driven web solutions combining technical expertise
          with creativity to bring innovative digital products to life.
        </motion.p>
      </motion.div>

      <div className="display">
        <motion.p
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            delay: 0.9,
            duration: 1,
            type: "spring",
          }}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            transition: { duration: 0.3 },
          }}
        >
          <img src="/MainImg.png" alt="DisplayPicture" id="image" />
        </motion.p>

        <motion.a
          href="#Main"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.button
            id="Abtme"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
        </motion.a>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default About;
