import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import cursosImage from "../../../images/cursosImage.png";
import useWindowSize from "../../../hooks/useWindowSize";
import "./Cursos.css";
import { Link } from "react-router-dom";

const Cursos = () => {
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
    <div className="cursos--container">
      {width <= 1024 && (
        <div className="cursos-subTitle-container">
          <h1 className="cursos-subTitle">CURSOS</h1>
        </div>
      )}
      <div className="cursos-title-description-container">
        {width > 1025 ? (
          <div className="cursos-title-subDescription-container">
            <h1 className="animate__animated animate__fadeInDown animate__slow cursos--title">
              {" "}
              ELEVADAS <br></br>
            </h1>
            <h3 className="cursos-subDescription">
              Hacé crecer tu presencia, contenido y empresa digital.
            </h3>
          </div>
        ) : (
          <div className="cursos-title-subDescription-container">
            <h1 className="cursos--title">
              ELEVADAS<br></br>
            </h1>
            <h3 className="cursos-subDescription">
              Hacé crecer tu presencia, contenido y empresa digital.
            </h3>
          </div>
        )}
        {/* 
        <h1
          className={
            width < 800
              ? "cursos--title"
              : "animate__animated animate__fadeInDown animate__slow cursos--title"
          }
        >
          COMO EXPANDIR TU PRESENCIA <br></br>
          DIGITAL EN REDES & CALIDAD <br></br>
          DE CONTENIDO
        </h1> */}
        <div className="animate__animated animate__fadeInDown animate__slow cursos-description-button">
          <p className="cursos-description">
            Curso diseñado específicamente para personas que tengan ganas de
            expandirse, tanto personal como profesionalmente, obteniendo
            herramientas para construir una empresa digital y creando un plan
            estratégico sostenible en el tiempo para hacer crecer tus ventas, tu
            comunidad y la calidad de contenido.
          </p>
          <div className="cursos-button-container">
            <Link to="/cursos">
              <Button
                className="cursos-button"
                variant="contained"
                size="large"
              >
                COMPRAR
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {width >= 1025 && (
        <div className="cursos-subTitle-container">
          <h1 className="cursos-subTitle">CURSOS</h1>
        </div>
      )}
    </div>
  );
};

export default Cursos;
