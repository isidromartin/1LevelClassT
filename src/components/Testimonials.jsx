import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const testimonios = [
  {
    name: "Carlos Rodríguez",
    text: "Un evento impecable. La organización y el ambiente fueron de lujo, exactamente lo que esperábamos.",
    image: "images/testimonio.jpg",
  },
  {
    name: "Elena Martínez",
    text: "Gracias a 1LevelClass, nuestro evento fue un éxito. Atención de primer nivel y una ejecución impecable.",
    image: "images/testimonio.jpg",
  },
  {
    name: "Javier Torres",
    text: "La mejor experiencia de evento en la que he participado. Sofisticación y exclusividad en cada detalle.",
    image: "images/testimonio.jpg",
  },
  {
    name: "Carlos Rodríguez",
    text: "Un evento impecable. La organización y el ambiente fueron de lujo, exactamente lo que esperábamos.",
    image: "images/testimonio.jpg",
  },
  {
    name: "Elena Martínez",
    text: "Gracias a 1LevelClass, nuestro evento fue un éxito. Atención de primer nivel y una ejecución impecable.",
    image: "images/testimonio.jpg",
  },
  {
    name: "Javier Torres",
    text: "La mejor experiencia de evento en la que he participado. Sofisticación y exclusividad en cada detalle.",
    image: "images/testimonio.jpg",
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-20 px-6 bg-[#091C2A]">
      <div className="container mx-auto text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#E1C2B3]">
            Opiniones de Nuestros Clientes
          </h2>
          <div className="w-32 h-1 bg-[#E1C2B3] mx-auto mt-3"></div>
        </motion.div>

        {/* Swiper con testimonios */}
        <div className="mt-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonios.map((testimonio, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-[#0D1F30] shadow-lg rounded-xl p-6 flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Imagen del cliente */}
                  <img
                    src={testimonio.image}
                    alt={testimonio.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#E1C2B3]"
                  />

                  {/* Texto del testimonio */}
                  <p className="text-lg text-[#E1C2B3] font-body italic">
                    "{testimonio.text}"
                  </p>

                  {/* Nombre del cliente */}
                  <h4 className="text-xl font-semibold text-[#E1C2B3]">
                    {testimonio.name}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
