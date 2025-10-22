import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../CSS/Skills.css";

const skillsData = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Bootstrap", level: 70 },
    { name: "Tailwind CSS", level: 70 },
  ],
  backend: [
    { name: "Java", level: 85 },
    { name: "Spring Core/MVC/Boot", level: 80 },
    { name: "Spring JDBC/JPA", level: 75 },
    { name: "REST API", level: 80 },
  ],
  database: [
    { name: "MySQL", level: 80 },
    { name: "Oracle DB", level: 65 },
  ],
  devtools: [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 60 },
    { name: "Postman", level: 60 },
    { name: "Kubernetes", level: 60 },
  ],
  testing: [
    { name: "JUnit", level: 75 },
    { name: "Mockito", level: 70 },
  ],
  cloud: [
    { name: "Microservices", level: 75 },
    { name: "AWS Basics", level: 60 },
  ],
};

function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillSection = document.getElementById("SkillSec");
      if (!skillSection) return;

      const top = skillSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { key: "frontend", title: "FRONTEND", color: "#8b5cf6" },
    { key: "backend", title: "BACKEND", color: "#3b82f6" },
    { key: "database", title: "DATABASE", color: "#10b981" },
    { key: "devtools", title: "DEVOPS & TOOLS", color: "#f59e0b" },
    { key: "testing", title: "TESTING", color: "#ef4444" },
    { key: "cloud", title: "CLOUD & MICROSERVICES", color: "#ec4899" },
  ];

  return (
    <motion.div
      id="SkillSec"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        id="skillHead"
        initial={{ scale: 0, rotateZ: 180 }}
        whileInView={{ scale: 1, rotateZ: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1>Skills</h1>
      </motion.div>

      <div className="skills-container">
        {categories.map((category, catIndex) => (
          <motion.div
            className="category"
            key={category.key}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: catIndex * 0.1,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: `0 30px 80px ${category.color}66`,
            }}
          >
            <h3 className="category-title" style={{ color: category.color }}>
              {category.title}
            </h3>
            {skillsData[category.key].map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-name">{skill.name}</div>
                <div className="progress-bar">
                  <motion.div
                    className="progress"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: visible ? `${skill.level}%` : 0 }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
