import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_51g7hen",
        "template_d5ygm3b",
        form.current,
        "8mPVtDhb62eGi-7Yz"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
          console.log(result.text);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contacto"
      className="bg-[#091C2A] py-20 px-6"
      style={{
        backgroundImage: "url('images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda: Información de Contacto */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#E1C2B3]">
            Contacto
          </h2>
          <div className="w-32 h-1 bg-[#E1C2B3] mx-auto md:ml-0 mt-3"></div>

          {/* <p className="text-lg text-[#E1C2B3] leading-relaxed">
            Para consultas, reservas y eventos, contáctanos a través de nuestros
            canales:
          </p> */}

          <div className="space-y-4 text-lg">
            <div className="text-[#E1C2B3] hover:text-white transition duration-300 flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/1levelclass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="mailto:info@1levelclass.com">info@1levelclass.com</a>
            </div>

            <div className="text-[#E1C2B3] hover:text-white transition duration-300 flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/1levelclass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://wa.me/message/5V5CVVCA2MF6G1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div className="text-[#E1C2B3] hover:text-white transition duration-300 flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/1levelclass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/1levelclass"
                target="_blank"
                rel="noopener noreferrer"
              >
                @1levelclass
              </a>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Formulario */}
        <motion.div
          className="bg-[#e1c2b3e] text-[#E1C2B3] rounded-xl p-10 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold mb-6 text-center">
            Envíanos un Mensaje
          </h3>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block text-[#E1C2B3] font-medium">
                Nombre *
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Tu Nombre"
                className="w-full p-3 mt-2 border border-[#E1C2B3] rounded-lg bg-[#091C2A] text-[#E1C2B3] focus:ring-2 focus:ring-[#E1C2B3] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#E1C2B3] font-medium">
                Correo Electrónico *
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="ejemplo@email.com"
                className="w-full p-3 mt-2 border border-[#E1C2B3] rounded-lg bg-[#091C2A] text-[#E1C2B3] focus:ring-2 focus:ring-[#E1C2B3] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#E1C2B3] font-medium">
                Mensaje *
              </label>
              <textarea
                required
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                rows="4"
                className="w-full p-3 mt-2 border border-[#E1C2B3] rounded-lg bg-[#091C2A] text-[#E1C2B3] focus:ring-2 focus:ring-[#E1C2B3] focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#E1C2B3] text-black py-3 rounded-full font-semibold text-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
