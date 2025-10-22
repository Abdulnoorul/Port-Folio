import React from "react";
import { motion } from "framer-motion";
import "../CSS/Education.css";

function Education() {
  const education = [
    {
      year: "2013-2017",
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Sai Ganapathi Engineering College",
    },
    {
      year: "2011-2013",
      degree: "Senior Secondary (10+2) – M.P.C",
      institution: "Sri Surya Junior College",
    },
  ];

  return (
    <>
      <motion.div
        id="EduSec"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ scale: 0, rotateZ: -180 }}
          whileInView={{ scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h1>
      </motion.div>

      <div id="EducationSec">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            id={index === 0 ? "EnggSec" : "IntrSec"}
            initial={{
              opacity: 0,
              x: index === 0 ? -100 : 100,
              rotateY: index === 0 ? -90 : 90,
            }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: index === 0 ? 5 : -5,
              boxShadow: "0 30px 80px rgba(139, 92, 246, 0.5)",
            }}
          >
            <motion.button
              id={index === 0 ? "Enggbtn" : "Intrbtn"}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {edu.year}
            </motion.button>
            <motion.p
              id={index === 0 ? "Degr" : "intr"}
              whileHover={{ x: 10, color: "#c4b5fd" }}
            >
              {edu.degree}
            </motion.p>
            <motion.p
              id={index === 0 ? "DegrClz" : "intrClz"}
              whileHover={{ x: 10, color: "#93c5fd" }}
            >
              {edu.institution}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Education;
