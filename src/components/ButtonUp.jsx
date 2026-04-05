import { motion } from "framer-motion";

const ButtonUp = () => {
  const handleScroll = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <motion.button
      id="home"
      className="px-6 py-3 bg-neutral-900 text-white rounded-full transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:scale-[1.03]
        hover:shadow-lg
        active:translate-y-0 active:scale-95"
      onClick={handleScroll}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      <img
        className="w-6 h-6 text-amber-50 rotate-180"
        src="https://res.cloudinary.com/daywjaepf/image/upload/v1768361425/flecha_ippv0s.svg"
        alt="descarga"
      />
    </motion.button>
  );
};
export default ButtonUp;
