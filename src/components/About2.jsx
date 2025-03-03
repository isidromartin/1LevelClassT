import { motion } from "framer-motion";
import { Crown, CalendarCheck, Handshake } from "lucide-react"; // Íconos de lujo

const events = [
  {
    title: "Presencia Exclusiva",
  },
  {
    title: "Eventos Exclusivos",
  },
  {
    title: "Atención Personalizada",
  },
];

const About = () => {
  return (
    // <section id="about" className="py-20 px-6 bg-[#091C2A]">
    //   <div className="container mx-auto text-center">
    //     {/* Título con línea decorativa */}
    //     <motion.div
    //       initial={{ opacity: 0, y: -30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1 }}
    //       viewport={{ once: true }}
    //     >
    //       <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#E1C2B3]">
    //
    //       </h2>
    //       <div className="w-16 h-1 bg-primary mx-auto mt-3"></div>
    //     </motion.div>

    //     {/* Texto Descriptivo */}
    //     <motion.p
    //       className="text-lg sm:text-xl font-body text-[#E1C2B3] leading-relaxed mt-6 text-justify max-w-3xl mx-auto"
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1, delay: 0.3 }}
    //       viewport={{ once: true }}
    //     >
    //       En <span className="font-bold">1LevelClass</span>, ayudamos a marcas y
    //       organizadores de eventos a elevar su imagen y exclusividad
    //       proporcionando un equipo selecto.
    //     </motion.p>
    //   </div>

    //   {/* Beneficios con iconos finos, fondos transparentes y diseño elegante */}
    //   <div className="container mx-auto mt-12 flex flex-wrap justify-center gap-6 text-center">
    //     {[
    //       {
    //         title: "Presencia Exclusiva",
    //         icon: (
    //           <Crown size={30} strokeWidth={1} className="text-primary mb-4" />
    //         ),
    //       },
    //       {
    //         title: "Eventos Exclusivos",
    //         icon: (
    //           <CalendarCheck
    //             size={30}
    //             strokeWidth={1}
    //             className="text-primary mb-4"
    //           />
    //         ),
    //       },
    //       {
    //         title: "Atención Personalizada",
    //         icon: (
    //           <Handshake
    //             size={30}
    //             strokeWidth={1}
    //             className="text-primary mb-4 text-xl"
    //           />
    //         ),
    //       },
    //     ].map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className="p-12 rounded-xl shadow-xl transition-all duration-500 hover:scale-105
    //              border border-primary/50 flex flex-col items-center justify-center h-full
    //              w-full md:w-1/2 lg:w-1/3 bg-[rgba(225,194,179,0.15)] backdrop-blur-md"
    //         initial={{ opacity: 0, y: 30 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.2 * index }}
    //         viewport={{ once: true }}
    //       >
    //         {/* Ícono elegante */}
    //         {item.icon}
    //         <h3 className="mt-2 text-xl font-medium text-primary">
    //           {item.title}
    //         </h3>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>

    <section id="about" className="py-20 px-6 bg-[#091C2A] text-[#E1C2B3]">
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

      {/* Flexbox de eventos con cajas más grandes */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative p-10 rounded-lg shadow-xl overflow-hidden transition-all duration-500 
                 bg-[#0D2236]/80 border border-[#E1C2B3]/40 hover:bg-[#0F2A42]/90 
                 hover:shadow-2xl hover:scale-[1.05] backdrop-blur-md w-full md:w-1/2 lg:w-1/3 h-72 md:h-96"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Overlay más sutil para mejorar visibilidad de la imagen */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Contenido */}
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              {/* Icono dinámico basado en el evento */}
              <div className="mb-4 text-[#E1C2B3]">
                {index % 3 === 0 ? (
                  <Crown size={30} strokeWidth={1} />
                ) : index % 3 === 1 ? (
                  <CalendarCheck size={30} strokeWidth={1} />
                ) : (
                  <Handshake size={30} strokeWidth={1} />
                )}
              </div>

              {/* Título del evento */}
              <h3 className="mt-2 text-xl font-medium text-primary">
                {event.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
