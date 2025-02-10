import { motion } from "framer-motion";

// Definiere die Typen für die Props von NavItem
interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const Navbar_self = () => {
  return (
    <motion.nav
      className="w-full py-4 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg fixed top-0 left-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    > 
      <ul className="flex justify-center space-x-6 md:space-x-12 text-white font-semibold text-lg">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/regeln">Regeln</NavItem>
        <NavItem href="/fraktionsregeln">Fraktionsregeln</NavItem>
        <NavItem href="/contact">Kontakt</NavItem>
      </ul>
    </motion.nav>
  );
};
export default Navbar_self;

// Jetzt bekommt NavItem explizite TypeScript-Typen
const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a
        href={href}
        className="relative px-3 py-2 transition-all duration-300 ease-in-out 
                   bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text 
                   text-transparent hover:from-purple-500 hover:to-pink-500"
      >
        {children}
      </a>
    </motion.li>
  );
};


