import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ${
        scrolled ? "bg-[#0D2236] shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={
              scrolled ? "/images/logo_negro.svg" : "/images/logo_blanco.svg"
            }
            alt="1LevelClass Logo"
            className="h-12 md:h-14 transition-all duration-300 ml-4"
          />
        </a>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg transition-all duration-300 text-[#E1C2B3]">
          {["Sobre Nosotros", "Eventos", "Testimonios", "Contacto"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase().replace(" ", "")}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer hover:text-[#C9A78F] transition"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Menú Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E1C2B3] transition-all duration-300"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú Móvil Expandido */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-[#0D2236] p-6 flex flex-col items-center space-y-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Sobre Nosotros", "Eventos", "Testimonios", "Contacto"].map(
            (item, index) => (
              <Link
                key={index}
                to={item.toLowerCase().replace(" ", "")}
                smooth={true}
                duration={800}
                offset={-80}
                className="text-[#E1C2B3] text-xl cursor-pointer hover:text-[#C9A78F] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
