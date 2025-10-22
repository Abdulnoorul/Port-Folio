import React from "react";
import { motion } from "framer-motion";
import "../CSS/Certificate.css";

function Certificate() {
  const certificates = [
    { id: "GuviCert", src: "/GuviCertification.png", alt: "Guvi Certificate" },
    {
      id: "outCert",
      src: "/OutSkill_Certificate.JPG",
      alt: "OutSkill Certificate",
    },
  ];

  return (
    <>
      <motion.div
        id="CertificateSec"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          id="certHead"
          initial={{ scale: 0, rotateZ: -180 }}
          whileInView={{ scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1 id="cHead">Certificates</h1>
        </motion.div>

        <div id="certSect">
          {certificates.map((cert, index) => (
            <motion.div
              id={cert.id}
              key={cert.id}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 50,
                boxShadow: "0 30px 80px rgba(139, 92, 246, 0.5)",
              }}
            >
              <motion.img
                className="gcimg"
                src={cert.src}
                alt={cert.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Certificate;
