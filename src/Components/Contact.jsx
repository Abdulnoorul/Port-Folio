import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Contact.css";

function Contact() {
  const [active, setActive] = useState(null);

  const clickForDetail = (id) => {
    setActive(active === id ? null : id);
  };

  const contacts = [
    {
      id: 1,
      src: "/Contact.png",
      alt: "Contact",
      detail: "+91-8309240354",
      link: null,
    },
    {
      id: 2,
      src: "/Git-Hub.png",
      alt: "GitHub",
      detail: "Check My GitHub",
      link: "https://github.com/Abdulnoorul",
    },
    {
      id: 3,
      src: "/Gmaail.png",
      alt: "Gmail",
      detail: "noorulkhan.abdul@gmail.com",
      link: "mailto:noorulkhan.abdul@gmail.com",
    },
    {
      id: 4,
      src: "/Linked-In.png",
      alt: "LinkedIn",
      detail: "Check LinkedIn",
      link: "https://www.linkedin.com/in/abdul-noorul-akhlaq-khan-53bb2b37a/",
    },
    {
      id: 5,
      src: "/Location.png",
      alt: "Location",
      detail: "Hyderabad, India",
      link: null,
    },
    {
      id: 6,
      src: "/Line-WhatsApp.png",
      alt: "WhatsApp",
      detail: "Whatsapp Message",
      link: "https://api.whatsapp.com/send?phone=919010532452&text=Hello,%20thank%20you%20for%20reaching%20out%20through%20my%20portfolio.%20May%20I%20kindly%20ask%20you%20to%20introduce%20yourself%20and%20share%20a%20bit%20about%20the%20opportunity%20you're%20contacting%20me%20regarding?%20I%20look%20forward%20to%20hearing%20from%20you.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0, rotateY: -180 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <>
      <motion.div
        id="ContSec"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          id="conSec"
          initial={{ scale: 0, rotateZ: 180 }}
          whileInView={{ scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1 id="ConHead">Contact</h1>
        </motion.div>

        <motion.div
          id="ConnIcon"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* First Row */}
          <div className="icon-row">
            {contacts.slice(0, 3).map((contact) => (
              <motion.div
                className="icon-box"
                key={contact.id}
                onClick={() => clickForDetail(contact.id)}
                variants={iconVariant}
                whileHover={{
                  scale: 1.15,
                  rotateY: 20,
                  z: 50,
                  boxShadow: "0 20px 60px rgba(139, 92, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={contact.src}
                  alt={contact.alt}
                  className="icon"
                  animate={
                    active === contact.id ? { rotate: 360 } : { rotate: 0 }
                  }
                  transition={{ duration: 0.6 }}
                />
                <AnimatePresence>
                  {active === contact.id && (
                    <motion.div
                      className="details"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {contact.link ? (
                        <a href={contact.link}>{contact.detail}</a>
                      ) : (
                        contact.detail
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="icon-row">
            {contacts.slice(3, 6).map((contact) => (
              <motion.div
                className="icon-box"
                key={contact.id}
                onClick={() => clickForDetail(contact.id)}
                variants={iconVariant}
                whileHover={{
                  scale: 1.15,
                  rotateY: 20,
                  z: 50,
                  boxShadow: "0 20px 60px rgba(139, 92, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={contact.src}
                  alt={contact.alt}
                  className="icon"
                  animate={
                    active === contact.id ? { rotate: 360 } : { rotate: 0 }
                  }
                  transition={{ duration: 0.6 }}
                />
                <AnimatePresence>
                  {active === contact.id && (
                    <motion.div
                      className="details"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {contact.link ? (
                        <a href={contact.link}>{contact.detail}</a>
                      ) : (
                        contact.detail
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="footer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p id="Footpar">
            © 2025 Abdul Khan [アブドゥル ヌールル アクラク カーン] → Clean
            code, crafted with curiosity and care.
          </p>
        </motion.div>

        <motion.a
          href="#mainCon"
          id="btanch"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            id="TopBttn"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
          >
            &#9650;
          </motion.button>
        </motion.a>
      </motion.div>
    </>
  );
}

export default Contact;
