import { motion } from "framer-motion";
import { Crown, CalendarCheck, Handshake } from "lucide-react"; // Íconos de lujo

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
          <div className="w-16 h-1 bg-primary mx-auto mt-3"></div>
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
          proporcionando un equipo selecto.
        </motion.p>
      </div>

      {/* Beneficios con iconos finos, fondos transparentes y diseño elegante */}
      <div className="container mx-auto mt-12 flex flex-wrap justify-center gap-6 text-center">
        {[
          {
            title: "Presencia Exclusiva",
            icon: (
              <Crown
                size={50}
                strokeWidth={1.5}
                className="text-primary mb-4"
              />
            ),
          },
          {
            title: "Eventos Exclusivos",
            icon: (
              <CalendarCheck
                size={50}
                strokeWidth={1.5}
                className="text-primary mb-4"
              />
            ),
          },
          {
            title: "Atención Personalizada",
            icon: (
              <Handshake
                size={50}
                strokeWidth={1.5}
                className="text-primary mb-4"
              />
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-12 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 
                 border border-primary/50 flex flex-col items-center justify-center h-full 
                 w-full md:w-1/2 lg:w-1/3 bg-[rgba(225,194,179,0.15)] backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            {/* Ícono elegante */}
            {item.icon}
            <h3 className="text-2xl font-semibold text-primary">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
