import React from "react";

const CertificationCard = ({ cert }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Certificate Image */}
      {cert.image && (
        <a href={cert.image} target="_blank" rel="noopener noreferrer">
          <img 
            src={cert.image}
            alt={cert.title}
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-purple-500/20 cursor-pointer"
            loading="lazy"
          />
        </a>
      )}

      {/* Certificate Details */}
      <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
      <p className="text-gray-400">{cert.issuer}</p>
      <p className="text-sm text-gray-500 mt-1">
        {new Date(cert.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })}
      </p>
    </div>
  );
};

export default CertificationCard;
