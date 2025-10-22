import React from "react";
import { motion } from "framer-motion";
import "../CSS/Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "OMICS International Pvt. Ltd - (2021 – 2024)",
      points: [
        "Designed and maintained front-end interfaces for multiple journal platforms at OMICS Inter national Pvt. Ltd., including Walsh Medical Media and other publishers, creating intuitive and visually appealing layouts using HTML, CSS, JavaScript, and Bootstrap alongside a talented team.",
        "Built responsive web pages that ensured seamless functionality across devices, delivering engaging user experiences for various journal platforms under multiple publishers.",
        "Collaborated with content editors and designers to integrate journal content thoughtfully, enhancing readability and user engagement through careful front-end design.",
        "Enhanced UI components to ensure journal platforms were user-friendly and functional, aligning with team goals across diverse publisher portfolios.",
      ],
    },
    {
      title: "Assistant Managing Editor",
      company: "OMICS International Pvt. Ltd - (2019 – 2021)",
      points: [
        "Collected and structured data related to journal articles and maintained accurate records across internal systems.",
        "Coordinated the end-to-end process of manuscript handling for academic journals, from submission to final publication.",
        "Processed and tracked manuscripts using Editorial Tracking (ET) and Manuscript Tracking (MT) systems, ensuring seamless workflow and timely updates.",
        "Performed thorough proofreading and basic content editing to maintain clarity and consistency in manuscripts to maintain high editorial standards and publication quality.",
        "Drafted professional email templates for author outreach, enhancing communication efficiency and engagement.",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -100, rotateY: -90 },
    show: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, type: "spring" },
    },
  };

  return (
    <>
      <motion.div
        id="Experi"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          id="ExperiE"
          initial={{ scale: 0, rotateZ: -180 }}
          whileInView={{ scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.p>
      </motion.div>

      <motion.div
        id="ExpSect"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          id="WebExp"
          variants={itemVariant}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            boxShadow: "0 30px 80px rgba(139, 92, 246, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1 id="ExpTitle" whileHover={{ x: 10, color: "#a78bfa" }}>
            Web Developer
          </motion.h1>
          <h3 id="JobTitle">OMICS International Pvt. Ltd - (2021 – 2024)</h3>
          <ul id="listBull">
            {experiences[0].points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, color: "#c4b5fd" }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          id="AmeExp"
          variants={itemVariant}
          whileHover={{
            scale: 1.02,
            rotateY: -5,
            boxShadow: "0 30px 80px rgba(59, 130, 246, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1 id="amExp" whileHover={{ x: 10, color: "#60a5fa" }}>
            Assistant Managing Editor
          </motion.h1>
          <h3 id="Cmpny">OMICS International Pvt. Ltd - (2019 – 2021)</h3>
          <ul id="listBullet">
            {experiences[1].points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, color: "#93c5fd" }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Experience;
