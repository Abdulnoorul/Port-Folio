import React from "react";
import { motion } from "framer-motion";
import "../CSS/Projects.css";

function Projects() {
  const projects = [
    {
      id: "liProjI",
      icon: "/WT-main-logo.png",
      alt: "WisperTalk",
      link: "https://wispertalk.netlify.app/",
      btnId: "wtbtn",
      points: [
        "Built a secure full-stack web application using React (frontend) and Spring Boot with JPA (backend) to enable real-time text encryption and decryption with password-based access.",
        "Developed RESTful APIs in Spring Boot for message encryption/decryption, integrated with a MySQL database using JPA repositories to ensure secure and persistent message storage.",
        "Integrated frontend and backend using Axios & REST APIs, achieving smooth communication between React and Spring Boot services hosted on Netlify & Railway, ensuring scalability and deployment efficiency.",
      ],
    },
    {
      id: "liProjII",
      icon: "/cicon.png",
      alt: "PingMate",
      link: "https://psych-pingmate.netlify.app/",
      btnId: "pmbtn",
      points: [
        "Developed a full-stack real-time chat application using React for the front-end and Firebase for backend services including authentication and data storage.",
        "Built a secure chatroom where authenticated users can send and receive real-time messages using Firebase Firestore and onSnapshot listeners.",
        "Created a clean user interface with dynamic routing using React Router, including protected routes that restrict access to the chat room for unauthorized users.",
        "Implemented user authentication (Sign Up / Login) using Firebase Authentication with email-password login flow.",
      ],
    },
    {
      id: "liProjIII",
      icon: "/Aurora.png",
      alt: "AuroraCast",
      link: "https://aurora-cast.netlify.app/",
      btnId: "acbtn",
      points: [
        "Built a dynamic weather forecasting web application using React and integrated with the Weather API to fetch real-time weather data based on user input (city or district name).",
        "Implemented API data handling using useEffect and useState to retrieve and update weather information dynamically, including temperature, humidity, sunrise/sunset, moonrise/moonset, and location details.",
        "Developed a responsive UI that updates the background animation (GIF) and Video based on the current weather condition for an enhanced user experience.",
      ],
    },
    {
      id: "liProjIV",
      icon: "/NN12.png",
      alt: "NewsNow",
      link: "https://psych-news-now.netlify.app/",
      btnId: "nnbtn",
      points: [
        "Delivers curated, real-time news across 8 key categories (Politics, Business, Sports, Health, Science, Technology, Entertainment, and Lifestyle), plus a dedicated headlines section, focusing on India-centric content for targeted relevance.",
        "Integrates the NewsData.io API to fetch and display the latest articles, ensuring users receive up-to-date, reliable information with automatic deduplication of content for a clean, non-repetitive feed.",
        "Built with React and React Router for seamless navigation between home, categories, and individual sections, providing a fast, responsive user experience without full page reloads.",
      ],
    },
    {
      id: "liProjV",
      icon: "/logo-TN.png",
      alt: "TravelNest",
      link: "https://psych-travel-nest.netlify.app/",
      btnId: "tnbtn",
      points: [
        "Designed and developed a responsive bus ticket booking web application that allows users to input travel and passenger details to generate a downloadable PDF ticket.",
        "Utilized the jsPDF and jspdf-autotable libraries to dynamically generate a visually formatted ticket PDF, including journey information, passenger details, contact data, and branding.",
        "Implemented form validation and conditional checks to prevent incorrect submissions (e.g., matching source and destination cities, or incomplete fields).",
        "Enabled city selection, date picking, and passenger data entry with real-time state management using React hooks (useState)",
        "Included an intuitive 'Swap City' feature to instantly switch the source and destination fields, improving UX.",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectCard = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <>
      <motion.div
        id="Proj"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          id="ProjHead"
          initial={{ scale: 0, rotateZ: 180 }}
          whileInView={{ scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.p>
      </motion.div>

      <motion.div
        id="ProjSec"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            id={project.id}
            key={project.id}
            variants={projectCard}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50,
              boxShadow: "0 30px 80px rgba(139, 92, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={project.icon}
              alt={project.alt}
              className="proIcon"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <ul className="probull">
              {project.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, color: "#c4b5fd" }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="projBtn">Click to View</button>
            </motion.a>
          </motion.div>
        ))}

        <motion.div
          id="liProjVI"
          variants={projectCard}
          whileHover={{ scale: 1.05, rotateZ: 5 }}
        >
          <motion.a
            href="https://github.com/Abdulnoorul"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button id="morbtn">For More ...</button>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Projects;
