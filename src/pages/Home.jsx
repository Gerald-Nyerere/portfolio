import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import myImage from "../assets/gerald.png";
import Certifications from "./Certifications";
import About from "./About";
import Contact from "./Contact";
import portfolioImg from "../assets/portfolio.png";
import ecommerceImg from "../assets/ecommerce.png";
import studentResultImg from "../assets/studentresult.png";
import Services from "./Services";

const Home = () => {
  // my projects data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio site built with React and Tailwind CSS.The portfolio demonstrates my ability to design clean, interactive, and user-centered interfaces while integrating reusable components and smooth animations using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
      architecture_diagram: portfolioImg,
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "Online store application with cart and checkout functionality.",
      tech: ["Django", "React", "Python"],
      link: "#",
      architecture_diagram: ecommerceImg,
    },
    {
      id: 3,
      title: "Student Result Management API",
      description:
        "This is a RESTful backend service designed to manage student data, subjects, and exam results efficiently. It enables schools, admins, and teachers to handle result computation, performance tracking, and report generation in a structured and secure manner.",
      tech: ["Django", "Django Rest Framework", "Python"],
      link: "#",
      architecture_diagram: studentResultImg,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
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
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={myImage}
              alt="Gerald"
              className="rounded-full shadow-2xl w-full object-cover border-4 border-purple-400 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="w-full md:w-2/3 md:pl-8 text-center md:text-left space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl font-bold text-white">
              Hi, I'm <span className="text-purple-500">Gerald Nyerere</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate Software Developer focused on building scalable and efficient web
              applications. I love turning ideas into user-centered digital experiences.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/projects"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg transition"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(128,0,255,0.2)" }}
              >
                <Link to={`/projects/${project.id}`}>
                  <ProjectCard project={project} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <div className="mt-20">
          <Services />
        </div>

        {/* Other Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white mt-16 space-y-16"
        >
          <Certifications />
          <About />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
