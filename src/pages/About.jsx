import { motion } from "framer-motion";
import { FaJsSquare, FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";

const About = () => {
  const skills = [
    { id: 1, name: "JavaScript", level: "Advanced", icon: <FaJsSquare className="text-yellow-400 w-10 h-10" /> },
    { id: 2, name: "Python", level: "Intermediate", icon: <FaPython className="text-blue-400 w-10 h-10" /> },
    { id: 3, name: "React", level: "Advanced", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
    { id: 4, name: "Django", level: "Intermediate", icon: <SiDjango className="text-green-600 w-10 h-10" /> },
    { id: 5, name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-500 w-10 h-10" /> },
    { id: 6, name: "SQL", level: "Intermediate", icon: <FaDatabase className="text-indigo-400 w-10 h-10" /> },
    { id: 7, name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-teal-400 w-10 h-10" /> },
    { id: 8, name: "Git & GitHub", level: "Advanced", icon: <FaGitAlt className="text-orange-400 w-10 h-10" /> },
  ];

  const levelMap = { Beginner: "33%", Intermediate: "66%", Advanced: "100%", };

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden py-16">
      {/* Animated background circles */}
      <motion.div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-purple-600 rounded-full opacity-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-green-500 rounded-full opacity-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* About Me Section */}
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white text-center md:text-left mb-8 border-b border-gray-700 pb-4"
        >
          About Me
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed text-center md:text-left"
        >
          I am a dedicated Software Developer with expertise in JavaScript, Python, and Node.js, along with 
          hands-on experience in web development, database management, and backend systems. I have worked with 
          frontend technologies like HTML, CSS, and React, and backend frameworks such as Flask and Django. My 
          experience extends to managing relational and NoSQL databases like MySQL, PostgreSQL, and MongoDB, as 
          well as designing and implementing scalable RESTful APIs. I am proficient in version control with Git, 
          and security best practices, including authentication and encryption. Additionally, I have explored DevOps
          tools such as Docker and AWS, along with emerging technologies like AI/ML and blockchain. Passionate about 
          building efficient, scalable, and user-friendly applications, I thrive on solving complex challenges through code.
        </motion.p>

        {/* Skills Section */}
        <motion.h3 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
          className="text-3xl font-semibold text-white mb-10 text-center md:text-left"
        >
          Skills
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div key={skill.id} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(128,0,255,0.2)", }}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-3">{skill.icon}</div>

              {/* Skill Name */}
              <h4 className="font-semibold text-lg text-white text-center">
                {skill.name}
              </h4>

              {/* Progress Bar */}
              <div className="w-full h-2 mt-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: levelMap[skill.level] }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                ></motion.div>
              </div>

              {/* Skill Level */}
              <p className="text-gray-400 text-sm mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
