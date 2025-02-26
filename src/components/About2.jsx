import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#091C2A]">
      <div className="container mx-auto text-center">
        {/* Título con línea decorativa */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#E1C2B3]">
            Sobre Nosotros
          </h2>
          <div className="w-16 h-1 bg-[#B49453] mx-auto mt-3"></div>
        </motion.div>

        {/* Texto Descriptivo */}
        <motion.p
          className="text-lg sm:text-xl font-body text-[#E1C2B3] leading-relaxed mt-6 text-justify max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          En <span className="font-bold">1LevelClass</span>, ayudamos a marcas y
          organizadores de eventos a elevar su imagen y exclusividad
          proporcionando un equipo selecto. Nos aseguramos de que cada evento
          refleje <span className="font-bold">elegancia y distinción</span>.
        </motion.p>
      </div>

      {/* Beneficios en columnas */}
      <div className="container mx-auto mt-12 grid md:grid-cols-3 gap-6 text-center">
        <motion.div
          className="bg-[#3A2E29] p-6 rounded-xl shadow-lg transition-transform hover:scale-105 border border-[#B49453]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#E1C2B3]">
            🌟 Presencia Exclusiva
          </h3>
          <p className="text-lg text-[#E1C2B3] mt-3">
            Perfiles seleccionados para aportar sofisticación y carisma a
            eventos de lujo.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#3A2E29] p-6 rounded-xl shadow-lg transition-transform hover:scale-105 border border-[#B49453]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#E1C2B3]">
            ✨ Eventos Exclusivos
          </h3>
          <p className="text-lg text-[#E1C2B3] mt-3">
            Trabajamos en los eventos más exclusivos, desde moda hasta congresos
            de lujo.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#3A2E29] p-6 rounded-xl shadow-lg transition-transform hover:scale-105 border border-[#B49453]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#E1C2B3]">
            🎯 Atención Personalizada
          </h3>
          <p className="text-lg text-[#E1C2B3] mt-3">
            Gestión 24/7 para garantizar una organización impecable en cada
            evento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
