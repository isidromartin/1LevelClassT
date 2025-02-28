import { useEffect, useRef } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero/Hero";
import HeroDefault from "./components/Hero/HeroDefault";
import HeroVideo from "./components/Hero/HeroVideo";
import HeroModern from "./components/Hero/HeroModern";
import About2 from "./components/About2";
import Eventos from "./components/Eventos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import gsap from "gsap";

function App() {
  const gsapRef = useRef(false);

  useEffect(() => {
    if (!gsapRef.current) {
      gsapRef.current = true;
      gsap.from("section", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>1LevelClass</title>
        <meta
          name="description"
          content="Un viaje gastronómico por la auténtica cocina valenciana."
        />
      </Helmet>
      {/* <Navbar /> */}
      <main>
        <section id="hero">
          <HeroModern />
        </section>
        <div className="relative w-full flex items-center justify-center z-40">
          <div className="border-t border-gray-400 w-1/4"></div>
          <img
            src="images/lgR.png"
            alt="Logo Divisor"
            className="h-12 mx-4 bg-transparent"
          />
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>
        <section id="about">
          <About2 />
        </section>
        <div className="absolute w-full flex items-center justify-center z-40">
          <div className="border-t border-gray-400 w-1/4"></div>
          <img
            src="images/lgR.png"
            alt="Logo Divisor"
            className="h-12 mx-4 bg-transparent"
          />
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>
        <section id="eventos">
          <Eventos />
        </section>

        <section id="heroVideo">
          <HeroVideo />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <div className="my-8 flex items-center justify-center z-40">
          <div className="border-t border-gray-700 w-full"></div>
        </div>
      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default App;
