import React from "react";
import modifiedServicios from "../../../content/servicios";
import "./Servicios.css";
import { useLocation } from "react-router-dom";

const servicioCard = modifiedServicios.map((servicio) => (
  <a
    href={servicio.service}
    target={servicio.id !== 1 ? "_blank" : ""}
    className="servicioCard--container"
    key={servicio.id}
    rel="noreferrer"
  >
    <h1
      className="serviciosCard--subtitle"
      dangerouslySetInnerHTML={{ __html: servicio.title }}
    ></h1>

    <img
      className="servicioCard--image"
      src={servicio.img}
      alt="servicioCard"
    />
    <h1 className="servicioCard-number">{servicio.number}</h1>
  </a>
));

const Servicios = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/servicios"
          ? "servicios--container servicios-page-container"
          : "servicios--container"
      }
    >
      <h1 className="servicios--title">SERVICIOS</h1>
      <div className="servicios--component">{servicioCard}</div>
    </div>
  );
};

export default Servicios;
