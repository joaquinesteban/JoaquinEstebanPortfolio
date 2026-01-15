import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tags = [], demo, code }) => {
  return (
    <motion.div
      className="w-5/6 bg-white rounded-2xl p-5 shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-semibold  mb-3">{title}</h3>
      <p className="text-neutral-600 font-light text-sm ">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6 mt-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-300 text-gray-600 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-start gap-2 ">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Demo
        </a>

        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
