import React from "react";
import { motion } from "framer-motion";
import "../CSS/Main.css";

function Main() {
  const navItems = [
    {
      href: "#Experi",
      src: "/Experience.png",
      alt: "ExperienceLogo",
      title: "Experience",
    },
    {
      href: "#Proj",
      src: "/project.png",
      alt: "ProjectLogo",
      title: "Projects",
    },
    {
      href: "#EduSec",
      src: "/education.png",
      alt: "EducationLogo",
      title: "Education",
    },
    { href: "#SkillSec", src: "/skill.png", alt: "SkillLogo", title: "Skills" },
    {
      href: "#CertificateSec",
      src: "/certificate.png",
      alt: "CertificateLogo",
      title: "Certificates",
    },
    {
      href: "#ContSec",
      src: "/communicate.png",
      alt: "CommunicationLogo",
      title: "Contacts",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        id="Main"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          id="abtMeSec"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p id="abtme">About Me</p>
        </motion.div>

        <motion.div
          id="Summ"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            id="semsec"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Professional with 5 years of experience, including 2+ years in IT,
            transitioning from publishing and editorial management to excel as a
            full-stack web developer. Skilled in React, Spring Boot, Java,
            MySQL, HTML, CSS, JavaScript, and tools like Git, Docker, and
            Kubernetes, with proven expertise in Agile-Scrum, SDLC, and
            microservices. Key highlights include designing responsive journal
            platform interfaces, building a secure message encryption app
            (WisperTalk) with React and Spring Boot, and developing a real-time
            chat app (Ping Mate) using Firebase. Quick to adapt, I thrive in
            collaborative, fast-paced environments, bringing a unique
            problem-solving perspective from my diverse background. Certified in
            Generative AI (Prompt Engineering, OpenAI GPT-4o, Claude 3), I am
            eager to contribute technical expertise to a Full-Stack Developer or
            Software Engineer role, driving innovation and growth.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        id="btndiv"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          id="btnicn"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {navItems.map((navItem, index) => (
            <motion.a href={navItem.href} key={index} variants={item}>
              <motion.button
                className="ibtnname"
                whileHover={{
                  scale: 1.2,
                  rotateY: 180,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={navItem.src}
                  alt={navItem.alt}
                  className="icoons"
                  title={navItem.title}
                />
              </motion.button>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Main;
