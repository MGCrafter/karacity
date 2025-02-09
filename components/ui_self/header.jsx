import { motion } from "framer-motion";

const Header = ({ title }) => {
  return (
    <header className="pt-8 md:pt-12 text-center">
      <motion.h1>
        <motion.a
          href="/"
          className="
            text-center font-bold uppercase
            bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400
            bg-clip-text text-transparent
            text-3xl       // Standard-Schriftgröße (für Mobilgeräte)
            md:text-5xl    // Mittlere Bildschirme: Tablets
            lg:text-6xl    // Große Bildschirme: Desktop
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.a>
      </motion.h1>
    </header>
  );
};

export default Header;
