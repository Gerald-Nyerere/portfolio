import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";
import ecommerceImg from "../assets/ecommerce.png";
import studentResultImg from "../assets/studentresult.png";
import { FaGithub } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio site built with React and Tailwind CSS to showcase my work, skills, and experience with smooth animations and responsive design. The portfolio demonstrates my ability to design clean, interactive, and user-centered interfaces while integrating reusable components and smooth animations using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript", "SQL", "Django Rest Framework"],
      link: "#",
      source_code: "https://github.com/Gerald-Nyerere/gerald-portfolio.git",
      architecture_diagram: portfolioImg,
    },
    {
      id: 2,
      title: "E-commerce App",
      description:
        "An online store application built using Django and React. It includes features like user authentication, cart management, checkout, and order tracking.",
      tech: ["Django", "React", "Python", "HTML5 & CSS"],
      link: "#",
      source_code: "https://github.com/geraldnyerere/ecommerce-app",
      architecture_diagram: ecommerceImg,
    },
    {
      id: 3,
      title: "Student Result Management API",
      description:
        "This is a RESTful backend service designed to manage student data, subjects, and exam results efficiently. It enables schools, admins, and teachers to handle result computation, performance tracking, and report generation in a structured and secure manner.",
      tech: ["Django", "Django Rest Framework", "Python"],
      link: "#",
      source_code: "https://github.com/Gerald-Nyerere/Alx_Capstone_project.git",
      architecture_diagram: studentResultImg,
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A full-stack blogging platform with Django and React, supporting CRUD posts, authentication, and a responsive interface for an engaging writing experience.",
      tech: ["Django", "React", "PostgreSQL"],
      link: "#",
      source_code: "https://github.com/geraldnyerere/blog-platform",
      architecture_diagram:
        "https://via.placeholder.com/800x450.png?text=Blog+Platform+Architecture",
    },
  ];

  const placeholderImage =
    "https://via.placeholder.com/800x450.png?text=Project+Image";
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Project Not Found
          </h2>
          <Link
            to="/projects"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-500">
      {/* Decorative circles */}
      <div className="absolute top-[-60px] left-[-60px] w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-blue-300 dark:bg-blue-800 rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-gray-700"
        >
          {/* Project Image */}
          <motion.img
            src={project.architecture_diagram || placeholderImage}
            alt={project.title}
            onError={(e) => (e.target.src = placeholderImage)}
            className="w-full h-72 object-cover rounded-2xl mb-8 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
          >
            {project.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white"
          >
            Technologies Used
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 dark:from-purple-800 dark:via-pink-800 dark:to-red-800 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium cursor-pointer transform transition hover:scale-105 hover:shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {/* View Project */}
            {project.link && (
              <motion.a
                href={project.link}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-5 py-2 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl font-semibold"
              >
                View Project
              </motion.a>
            )}

            {/* View Source Code */}
            {project.source_code && (
              <motion.a
                href={project.source_code}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 text-center bg-gray-900 dark:bg-gray-800 text-white px-5 py-2 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl font-semibold flex items-center justify-center gap-2"
              >
                <FaGithub className="text-xl" />
                Source Code
              </motion.a>
            )}
          </div>

          {/* Back */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-lg"
            >
              ← Back to Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
