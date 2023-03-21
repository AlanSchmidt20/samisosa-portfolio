import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import useWindowSize from "../../hooks/useWindowSize";
import Cursos from "./Cursos";
import Servicios from "./Servicios/Servicios";
import Presets from "./Presets/Presets";
import Redes from "./Redes/Redes";
import Contact from "./Contact";

const Screens = () => {
  const [showText, setShowText] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body--container">
      <Home />
      {width > 800 ? showText && <About /> : <About />}
      {width > 800 ? showText && <Cursos /> : <Cursos />}
      <Servicios />
      {width > 800 ? showText && <Presets /> : <Presets />}
      <Contact />
      <Redes />
    </div>
  );
};
export default Screens;
