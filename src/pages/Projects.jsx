import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import portfolioImg from "../assets/portfolio.png";
import ecommerceImg from "../assets/ecommerce.png";
import studentResultImg from "../assets/studentresult.png";

const Projects = () => {
  // my projects data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio site built with React and Tailwind CSS to showcase my work and skills. The portfolio demonstrates my ability to design clean, interactive, and user-centered interfaces while integrating reusable components and smooth animations using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript", "SQL", "Django Rest FrameWork"],
      link: "#",
      source_code: "https://github.com/Gerald-Nyerere/gerald-portfolio.git",
      architecture_diagram: portfolioImg,
    },
    {
      id: 2,
      title: "E-commerce App",
      description:
        "Full-featured online store application with product catalog, cart, and secure checkout functionality.",
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
        "A dynamic blogging platform featuring user authentication, post creation, and real-time updates.",
      tech: ["Django", "React", "PostgreSQL"],
      link: "#",
      source_code: "https://github.com/geraldnyerere/blog-platform",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden text-gray-100">
      {/* Decorative animated circles */}
      <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          My Projects
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed text-center md:text-left max-w-3xl"
        >
          Here are some of the projects I’ve worked on — showcasing my skills in
          frontend and backend development. Each project reflects my commitment
          to building efficient, user-friendly, and scalable applications.
        </motion.p>

        {/* Animated Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="transform transition hover:scale-105 hover:shadow-purple-500/30"
            >
              <Link target="_blank" rel="noopener noreferrer" to={`/projects/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
