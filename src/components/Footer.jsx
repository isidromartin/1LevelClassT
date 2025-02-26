import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#091C2A] text-[#E1C2B3] py-12 px-6 text-center">
      <div className="container mx-auto">
        {/* Logo y nombre */}
        <div className="pb-6">
          <img
            src="images/logo.png"
            alt="1LevelClass Logo"
            className="h-24 mx-auto"
          />
          <h2 className="text-2xl font-bold tracking-wide">1LevelClass</h2>
        </div>

        {/* Frase destacada */}
        <div className="pb-6 mb-6">
          <p className="text-xl italic font-light">
            "Belleza con propósito. Presencia con impacto."
          </p>
        </div>

        <div className="my-8 flex items-center justify-center z-40">
          <div className="border-t border-gray-700 w-full"></div>
        </div>

        {/* Grid de enlaces y redes sociales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-3">Enlaces Rápidos</h3>
            <div className="flex flex-col space-y-2">
              {/* <a href="#about" className="hover:text-[#ffffff] transition">
                Sobre Nosotros
              </a>
              <a href="#events" className="hover:text-[#ffffff] transition">
                Eventos
              </a>
              <a href="#contact" className="hover:text-[#ffffff] transition">
                Contacto
              </a> */}
              <ul>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-[#ffffff] transition"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="events"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-[#ffffff] transition"
                  >
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-primary transition"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    to="contacto"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-primary transition"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-bold mb-3">Síguenos</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:info1levelclass@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1C2B3] hover:text-white transition duration-300 text-2xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/1levelclass/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1C2B3] hover:text-white transition duration-300 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.instagram.com/1levelclass/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1C2B3] hover:text-white transition duration-300 text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}

        <div className="my-8 flex items-center justify-center z-40">
          <div className="border-t border-gray-700 w-full"></div>
        </div>

        {/* Copyright */}
        <p className="opacity-80 text-sm">
          © {new Date().getFullYear()} 1LevelClass. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
