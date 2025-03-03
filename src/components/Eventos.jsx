import { motion } from "framer-motion";
import { CalendarHeart, Star, MapPin } from "lucide-react";

const events = [
  {
    title: "Eventos en restaurantes",
    desc: "Nuestra agencia eleva la imagen de restaurantes de lujo, atrayendo un público exclusivo, mejorando la experiencia y potenciando su visibilidad en redes y eventos especiales.",
  },
  {
    title: "Eventos de moda y marcas de lujo",
    desc: "Nuestra agencia potencia eventos de moda al aportar un toque de elegancia y dinamismo, conectando con un público selecto y maximizando la visibilidad y prestigio de cada marca.",
  },
  {
    title: "Eventos deportivos",
    desc: "Nuestra agencia transforma la experiencia, aportando una imagen sofisticada y dinámica que eleva la visibilidad del evento, atrae patrocinadores y fideliza a los aficionados.",
  },
  {
    title: "Ferias y congresos de lujo",
    desc: "Nuestra agencia potencia ferias y congresos de lujo al realzar la imagen del evento, generar conexiones estratégicas y garantizar experiencias inolvidables.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 px-6 bg-[#091C2A] text-[#E1C2B3]">
      <div className="container mx-auto text-center">
        {/* Título con línea decorativa */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#E1C2B3]">
            Eventos Exclusivos
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
          Cada evento que diseñamos es una obra maestra, creada para reflejar
          elegancia, exclusividad y un nivel de detalle sin precedentes.
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
                  <CalendarHeart size={30} strokeWidth={1} />
                ) : index % 3 === 1 ? (
                  <Star size={30} strokeWidth={1} />
                ) : (
                  <MapPin size={30} strokeWidth={1} />
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
}
