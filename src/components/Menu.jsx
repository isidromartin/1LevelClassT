import { motion } from "framer-motion";

const events = [
  {
    title: "Eventos en restaurantes",
    desc: "Nuestra agencia eleva la imagen de restaurantes de lujo, atrayendo un público exclusivo, mejorando la experiencia y potenciando su visibilidad en redes y eventos especiales.",
    img: "images/ev1.jpg",
  },
  {
    title: "Eventos de moda y marcas de lujo",
    desc: "Nuestra agencia potencia eventos de moda al aportar un toque de elegancia y dinamismo, conectando con un público selecto y maximizando la visibilidad y prestigio de cada marca.",
    img: "images/ev2.jpg",
  },
  {
    title: "Eventos deportivos",
    desc: "Nuestra agencia transforma la experiencia, aportando una imagen sofisticada y dinámica que eleva la visibilidad del evento, atrae patrocinadores y fideliza a los aficionados.",
    img: "images/ev3.jpg",
  },
  {
    title: "Ferias y congresos de lujo",
    desc: "Nuestra agencia potencia ferias y congresos de lujo al realzar la imagen del evento, generar conexiones estratégicas y garantizar experiencias inolvidables.",
    img: "images/ev4.jpg",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 px-6 bg-[#091C2A] text-[#E1C2B3]">
      <div className="container mx-auto text-center">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Eventos Exclusivos</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Cada evento que diseñamos es una obra maestra, creada para reflejar
            elegancia, exclusividad y un nivel de detalle sin precedentes.
          </p>
        </motion.div>

        {/* Grid de eventos */}
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg shadow-lg overflow-hidden transition duration-300 bg-[#0D2236] border border-[#E1C2B3]/40 hover:bg-[#0F2A42] hover:shadow-2xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 opacity-15">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-[#E1C2B3] mb-2">
                  {event.title}
                </h3>
                <p className="text-lg opacity-80 text-justify">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
