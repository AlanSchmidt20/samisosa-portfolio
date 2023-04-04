import React from "react";
import Button from "@mui/material/Button";
import useWindowSize from "../../../hooks/useWindowSize";
import "./Cursos.css";
import { Link } from "react-router-dom";

const Cursos = () => {
  /*   const [showText, setShowText] = useState(false);
   */ const [width] = useWindowSize();

  /*   useEffect(() => {
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
  }, []); */

  return (
    <div className="cursos--container">
      {width <= 786 && (
        <div className="cursos-subTitle-container">
          <h1 className="cursos-subTitle">CURSOS</h1>
        </div>
      )}
      <div className="cursos-title-description-container">
        <div className="cursos-title-subDescription-button-container">
          <div
            className={
              width >= 1020
                ? "animate__animated animate__fadeInDown animate__slow cursos-title-subDescription-container"
                : "cursos-title-subDescription-container"
            }
          >
            <h1 className="cursos--title">
              Elevadas <br></br>
            </h1>
            <h3 className="cursos-subDescription">
              Hacé crecer tu presencia, contenido y empresa digital.
            </h3>
          </div>
          {width >= 786 && (
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
          )}
        </div>
        <div className="cursos-description-button">
          <p className="animate__animated animate__fadeInDown animate__slow cursos-description">
            Curso diseñado específicamente para personas que tengan ganas de
            expandirse, tanto personal como profesionalmente, obteniendo
            herramientas para construir una empresa digital y creando un plan
            estratégico sostenible en el tiempo para hacer crecer tus ventas, tu
            comunidad y la calidad de contenido.
          </p>
        </div>
        {width <= 786 && (
          <div className="cursos-button-container">
            <Link to="/cursos">
              <Button
                className="cursos-button cursosPortada-button"
                variant="contained"
                size="small"
              >
                COMPRAR
              </Button>
            </Link>
          </div>
        )}
      </div>
      {width >= 786 && (
        <div className="cursos-subTitle-container">
          <h1 className="cursos-subTitle">CURSOS</h1>
        </div>
      )}
    </div>
  );
};

export default Cursos;
