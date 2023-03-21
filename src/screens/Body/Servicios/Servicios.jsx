import React from "react";
import modifiedServicios from "../../../content/servicios";
import "./Servicios.css";

const servicioCard = modifiedServicios.map((servicio) => (
  <a
    href={servicio.service}
    target={servicio.id != 1 ? "_blank" : ""}
    className="servicioCard--container"
    key={servicio.id}
  >
    <h1
      className="serviciosCard--subtitle"
      dangerouslySetInnerHTML={{ __html: servicio.title }}
    ></h1>

    <img className="servicioCard--image" src={servicio.img} />
    <h1 className="servicioCard-number">{servicio.number}</h1>
  </a>
));

const Servicios = () => {
  return (
    <div className="servicios--container">
      <h1 className="servicios--title">SERVICIOS</h1>
      <div className="servicios--component">{servicioCard}</div>
    </div>
  );
};

export default Servicios;
