import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-2 
                    hover:shadow-purple-400 hover:shadow-lg hover:scale-105 transform transition-all duration-300">
      {/* Skill Icon */}
      <div className="text-4xl text-purple-600">{skill.icon}</div>

      {/* Skill Name */}
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h4>

      {/* Skill Level */}
      <p className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}</p>
    </div>
  );
};

export default SkillCard;
