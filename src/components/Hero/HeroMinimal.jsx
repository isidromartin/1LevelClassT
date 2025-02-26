import { motion, useScroll, useTransform } from "framer-motion";

const HeroMinimal = () => {
  const { scrollY } = useScroll();

  // Efecto Parallax: el texto sube ligeramente al hacer scroll
  const parallaxText = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-[#E1C2B3] text-center px-4 overflow-hidden">
      {/* Video de fondo con Parallax */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: useTransform(scrollY, [0, 300], [0, 30]) }} // Parallax en el video
      >
        <source src="images/film2.mp4" type="video/mp4" />
      </motion.video>

      {/* Capa oscura semitransparente para mejorar visibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Contenido con Parallax */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold drop-shadow-2xl tracking-wide"
          style={{ y: parallaxText }}
        >
          1LevelClass
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-[#E1C2B3] max-w-xl mx-auto drop-shadow-lg leading-relaxed"
          style={{ y: parallaxText }}
        >
          Not just a pretty face, but the talent and dedication to elevate your
          brand to the next level.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroMinimal;
