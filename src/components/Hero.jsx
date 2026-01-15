import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center py-28 px-6">
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/daywjaepf/image/upload/v1768201046/Gemini_Generated_Image_ydk4c3ydk4c3ydk4_kc3f6h.png"
          alt="Avatar"
          className="w-40 h-40 rounded-full object-cover"
        />
      </motion.div>

      <motion.h1
        className="font-bold text-4xl md:text-5xl text-neutral-800 max-w-2xl mx-auto leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Soy desarrollador Front-End. Construyo interfaces claras, accesibles y
        mantenibles.
      </motion.h1>
      <motion.button
        className="mt-8 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm
          transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03]
          hover:shadow-lg active:translate-y-0 active:scale-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Contactame →
      </motion.button>
    </section>
  );
};

export default Hero;
