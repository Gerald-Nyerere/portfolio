import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-gray-800 border border-gray-700 rounded-xl p-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold">{question}</h3>
        <span className="text-purple-400 text-2xl">{open ? "-" : "+"}</span>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-3"
      >
        <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Building responsive, interactive, and visually appealing interfaces using React, Tailwind CSS, and modern JavaScript.",
      icon: <FaLaptopCode className="text-blue-400 w-12 h-12" />,
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Developing robust, scalable server-side applications using Django, Node.js, and RESTful APIs.",
      icon: <FaServer className="text-green-400 w-12 h-12" />,
    },
    {
      id: 3,
      title: "Database Design",
      description:
        "Designing optimized and secure database architectures using MySQL, PostgreSQL, and MongoDB.",
      icon: <FaDatabase className="text-yellow-400 w-12 h-12" />,
    },
    {
      id: 4,
      title: "Mobile-Friendly Design",
      description:
        "Creating fully responsive layouts that adapt perfectly across mobile, tablet, and desktop devices.",
      icon: <FaMobileAlt className="text-pink-400 w-12 h-12" />,
    },
    {
      id: 5,
      title: "Maintenance & Debugging",
      description:
        "Troubleshooting performance issues, fixing bugs, and ensuring smooth and reliable application performance.",
      icon: <FaTools className="text-purple-400 w-12 h-12" />,
    },
    {
      id: 6,
      title: "Cloud Deployment",
      description:
        "Deploying applications to cloud platforms like Render, Vercel, Netlify, and AWS.",
      icon: <FaCloud className="text-cyan-400 w-12 h-12" />,
    },
  ];

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Depending on the complexity, a typical website takes 1–3 weeks. Larger full-stack apps can take 1–2 months.",
    },
    {
      q: "Do you work with both frontend and backend?",
      a: "Yes! I'm a full-stack developer specializing in React, Django, Node.js, and modern APIs.",
    },
    {
      q: "Can you fix or improve an existing project?",
      a: "Absolutely. I troubleshoot bugs, optimize performance, refactor code, and add new features.",
    },
    {
      q: "Do you offer deployment services?",
      a: "Yes. I deploy applications to Render, Vercel, Netlify, and AWS with secure production configurations.",
    },
    {
      q: "How do we start working together?",
      a: "Simply visit the contact page and send your project details. I’ll reply within 24 hours.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden py-16">
      {/* Animated Background Circles */}
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

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white text-center md:text-left mb-8 border-b border-gray-700 pb-4"
        >
          My Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed text-center md:text-left"
        >
          I provide a wide range of development services that help bring ideas to
          life — from frontend UI designs to backend systems, databases,
          deployment, and long-term maintenance.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(128,0,255,0.2)",
              }}
              className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-white text-center mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hire Me CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Whether it's a full-stack project, backend system, or a modern web
            app, I'm ready to help bring your ideas to life with clean,
            scalable, and high-quality code.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            className="inline-block px-10 py-4 rounded-full text-xl font-semibold
               bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
               text-white shadow-lg shadow-purple-500/30
               hover:shadow-purple-500/50 transition-all duration-300"
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Hire Me Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full text-lg font-semibold
                   bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                   text-white shadow-lg shadow-purple-500/40
                   hover:shadow-purple-500/60 transition-all duration-300"
      >
        <Link to="/contact" className="block w-full text-center">Hire Me</Link>
      </motion.div>
    </div>
  );
};

export default Services;
