import React from "react";
import { motion } from "framer-motion";
import CertificationCard from "../components/CertificationCard";

const Certifications = () => {
  const certs = [
     {
      id: 1,
      title: "Back-end Web Development",
      issuer: "ALX Africa",
      date: "2025-09-18",
      image: "/images/back-end-web-development-certificate.png",
    },
    {
      id: 2,
      title: "Professional Foundations",
      issuer: "ALX Africa",
      date: "2025-04-15",
      image: "/images/professional-foundations-certificate.png",
    },
    {
      id: 3,
      title: "The Ultimate Flask Course",
      issuer: "Udemy",
      date: "2024-07-01",
      image: "/images/flask-course.png",
    },
    {
      id: 4,
      title: "REST APIs with Flask and Python",
      issuer: "Udemy",
      date: "2024-08-01",
      image: "/images/rest-apis.png",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden py-16">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-purple-600 rounded-full opacity-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-green-500 rounded-full opacity-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto p-6 relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12 border-b border-gray-700 pb-4"
        >
          Certifications
        </motion.h2>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 20px rgba(128,0,255,0.2)",
              }}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
