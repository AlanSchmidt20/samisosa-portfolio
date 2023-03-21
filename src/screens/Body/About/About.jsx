import React from "react";
import quienSoyImage from "../../../images/quienSoyImage.png";
import "animate.css/animate.min.css";
import "./About.css";
import useWindowSize from "../../../hooks/useWindowSize";

/* const AboutWeb = () => {
  return (
    <>
      <h1 className="quienSoy--title">CAMILA</h1>
      <img
        alt="quienSoyImage"
        className="quienSoy--image"
        src={quienSoyImage}
        fit="contain"
        style={{ background: "transparent", animation: "none" }}
      />
    </>
  );
};
const AboutMobile = () => {
  return (
    <>
      <img
        style={{ marginTop: "20px" }}
        alt="quienSoyImage"
        className="quienSoy--image"
        src={quienSoyImage}
        fit="contain"
        style={{ background: "transparent", animation: "none" }}
      />
      <h1 className="quienSoy--title">CAMILA</h1>
    </>
  );
}; */

const About = () => {
  /*   const [width] = useWindowSize();
   */ return (
    <div className="quienSoy--container">
      <h1 className="quienSoy--title">CAMILA</h1>
      <img
        alt="quienSoyImage"
        className="quienSoy--image"
        src={quienSoyImage}
        fit="contain"
        style={{ background: "transparent", animation: "none" }}
      />
      <div className="animate__animated animate__fadeInDown">
        <h1 className="quienSoy--subTitle">QUIEN SOY</h1>
        <p className="quienSoy--description">
          Mi nombre es Camila Sosa, pero me dicen Sami, soy una mujer creativa,
          trabajadora, soñadora, en crecimiento y movimiento constante, de
          Buenos Aires Argentina, tengo 22 años, trabajo como creadora de
          contenido, bailarina, modelo y actriz. Siempre supe que quería
          dedicarme al arte, por lo que desde muy chica empecé a formarme y dar
          mis primeras clases. Así es como aprendí a lo largo de mi vida que lo
          más importante es compartir y multiplicar conocimiento, que el maestro
          esta al mismo nivel que el alumno y que todo es energía. En este sitio
          vas a encontrar información para que trabajemos juntxs, espacios de
          aprendizaje, y una comunidad para que seas parte. No te olvides de
          suscribirte para obtener beneficios y estar al tanto de todas las
          novedades.
        </p>
      </div>
    </div>
  );
};

export default About;
