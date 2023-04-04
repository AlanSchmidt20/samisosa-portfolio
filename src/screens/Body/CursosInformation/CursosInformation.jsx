import "./CursosInformation.css";
import { useState } from "react";
import { items } from "../../../content/CursosItems";
import cursosItemsImage from "../../../images/cursosItems-image.PNG";
import temarioImage from "../../../images/temario-image.PNG";
import { Clase1, Clase2 } from "../../../content/CursosTemario";
import elevadasTitle from "../../../images/elevadas-title.png";
import temarioTitle from "../../../images/temario-title.png";
import { footerItems } from "../../../content/cursosFooterItems";
import footerItemsImage from "../../../images/footerItemsImage.PNG";
import samiLogoBlanco from "../../../images/samiLogoBlanco.png";
import Button from "@mui/material/Button";
import Checkout from "../../../components/Checkout/Checkout";

const CursosIntroduction = () => (
  <div className="cursosIntroduction-container">
    <img src={elevadasTitle} className="cursosIntroduction-title" alt="title" />
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
        <img
          className="cursosItems-image"
          src={cursosItemsImage}
          alt="cursosItemsImage"
        />
      </div>
      {items.map((item, idx) => (
        <ul key={idx} className="cursosItems-item-container">
          <li className="cursosItems-item">{item.topic}</li>
        </ul>
      ))}
    </div>
  );
};

const CursosTemario = () => {
  return (
    <div className="temario-container">
      <div className="temario-title-image">
        <div className="temario-title-container">
          <img
            src={temarioTitle}
            alt="temario-title"
            className="temario-title"
          />
        </div>
        <img className="temario-image" src={temarioImage} alt="temarioImage" />
      </div>
      <div className="temario-class1-class2">
        <ul className="class1">
          <h1 className="temario-clase">Clase I</h1>
          {Clase1.map((item, idx) => (
            <li key={idx} className="temario-items">
              {item.item}
            </li>
          ))}
          <li className="temario-lastItem">#Feedback + Consultoria + Dudas.</li>
        </ul>
        <ul className="class2">
          <h1 className="temario-clase">Clase II</h1>
          {Clase2.map((item, idx) => (
            <li key={idx} className="temario-items">
              {item.item}
            </li>
          ))}
          <li className="temario-lastItem">#Cierre de ciclo + Sorpresa.</li>
        </ul>
      </div>
    </div>
  );
};

const CursosFooterItems = (props) => {
  const { items } = props;
  return (
    <div className="footerItems-container">
      <h1>En este curso vas a:</h1>
      <div className="footerItems-item-container">
        {items.map((item) => (
          <ul key={item.id}>
            <li className="footerItems-item">{item.item}</li>
          </ul>
        ))}
      </div>
      <div className="footerImage-logo-container">
        <img
          src={samiLogoBlanco}
          className="footerImage-logo"
          alt="footerSami"
        />
        <img
          src={footerItemsImage}
          className="footerImage-image"
          alt="footerItem"
        />
      </div>
    </div>
  );
};

const CursosValue = () => {
  const [openCheckout, setOpenCheckout] = useState(false);

  const handleOpenCheckout = () => {
    setOpenCheckout(true);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };
  return (
    <div className="cursosValue-container">
      <div className="cursosValue-price-container">
        <h1>Valor total en pesos argentinos:</h1>
        <h1 className="cursosValue-price">$15.000</h1>
      </div>
      <div className="cursosValue-metodosDePago">
        Métodos de pago: <br></br>
        Tarjeta de débito <br></br>
        Tarjeta de crédito <br></br>
        Mercado Pago
      </div>
      <Button
        className="cursos-button cursosValue-button"
        variant="contained"
        size="large"
        onClick={handleOpenCheckout}
      >
        COMPRAR
      </Button>
      {openCheckout && (
        <Checkout isOpen={openCheckout} onClose={handleCloseCheckout} />
      )}
    </div>
  );
};

const CursosInformation = () => {
  return (
    <div className="cursosInformation-container">
      <CursosIntroduction />
      <CursosItems />
      <CursosTemario />
      <CursosFooterItems items={footerItems} />
      <CursosValue />
    </div>
  );
};

export default CursosInformation;
