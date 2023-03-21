import "./CursosInformation.css";
import { items } from "../../../content/CursosItems";
import cursosItemsImage from "../../../images/cursosItems-image.HEIC";

const CursosIntroduction = () => (
  <div className="cursosIntroduction-container">
    <h1 className="cursosIntroduction-title">ELEVATE</h1>
    <div className="cursosIntroduction-subDescription">
      Hacé crecer tu presencia, calidad de contenido y empresa digital.
    </div>
    <div className="cursosIntroduction-description">
      Si queres elevar tu identidad, trabajo profesional, calidad de
      comunicación, formar tu empresa digital, editar como un experto, manejarte
      con marcas/creadores de contenido, tener clientes 1:1, crear un plan
      sostenible, aprender a monetizar tus redes, armar tu propuesta
      presupuestos, enfocar tu energía y atraer abundancia este curso esta
      diseñado específicamente para vos.
    </div>
  </div>
);

const CursosItems = () => {
  return (
    <div className="cursosItems-container">
      <div className="cursosItems-title-image">
        <h1 className="cursosItems-title">
          Qué
          <br></br>
          incluye
          <br></br>
          este
          <br></br>curso:
        </h1>
        <img src={cursosItemsImage} alt="cursosItemsImage" />
      </div>
      {items.map((item, idx) => (
        <ul key={idx} className="cursosItems-item-container">
          <li className="cursosItems-item">{item.topic}</li>
        </ul>
      ))}
    </div>
  );
};

const CursosInformation = () => {
  return (
    <div className="cursosInformation-container">
      <div>{CursosIntroduction()}</div>
      <div>{CursosItems()}</div>
    </div>
  );
};

export default CursosInformation;
