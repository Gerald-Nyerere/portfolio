import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const placeholderImage =
    "https://via.placeholder.com/400x250.png?text=Project+Image";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between transform transition hover:shadow-2xl duration-300 ease-in-out"
    >
      {/* Project Image */}
      <motion.img
        src={project.architecture_diagram || placeholderImage}
        alt={project.title}
        onError={(e) => (e.target.src = placeholderImage)}
        className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-200 dark:border-gray-700"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      />

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 dark:from-purple-800 dark:via-pink-800 dark:to-red-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* View Project Button */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-5 py-2 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl font-semibold"
          >
            View Project
          </motion.a>
        )}

        {/* View Source Code Button */}
        {project.source_code && (
          <motion.a
            href={project.source_code}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center bg-gray-900 dark:bg-gray-800 text-white px-5 py-2 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl font-semibold"
          >
            View Source Code
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
