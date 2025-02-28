import { motion, useScroll, useTransform } from "framer-motion";

const HeroModern = () => {
  const { scrollY } = useScroll();

  // Efecto Parallax: el texto sube ligeramente al hacer scroll
  const parallaxText = useTransform(scrollY, [0, 300], [0, -50]);
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: "url('images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",

        // borderBottomWidth: "1px",
      }}
    >
      <div className="relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold drop-shadow-2xl tracking-wide"
          style={{ y: parallaxText }}
        >
          1LevelClass
        </motion.h1>

        <motion.p
          className="mt-4 text-md sm:text-lg md:text-xl text-[#E1C2B3] max-w-xl mx-auto drop-shadow-lg leading-relaxed"
          style={{ y: parallaxText }}
        >
          Not just a pretty face, but the talent and dedication to elevate your
          brand to the next level.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroModern;
