import React from "react";
import { presetsInformation } from "../../../content/presetsInformation";
import Button from "@mui/material/Button";
import "./PresetsInformation.css";
import { CartContext } from "../../../CartContext";
import { useContext } from "react";

const PresetsInformation = (props) => {
  /*   const product = props.product;
   */ const cart = useContext(CartContext);

  /*   const productQuantity = cart.getProductQuantity(product.id);
   */
  return (
    <div className="presetsInformation-container">
      <div className="presetsInformation-title-description">
        <h1 className="presetsIformation-title">PRESETS</h1>
        <p className="presetsIformation-description">
          Nunca fue tan fácil editar tus fotos como un profesional. Comprando
          uno de estos presets vas a poder hacerlo con tan solo un click para
          adecuarlo a tu estilo, contenido, y trabajo. Una vez hecha la compra
          te llegara un tutorial a tu correo para instalarlo.
        </p>
      </div>
      <div className="preset-grid-container">
        {presetsInformation.map((preset, idx) => (
          <div key={idx} className="preset-grid">
            <div>
              <img
                src={`${preset.image}`}
                width="100%"
                height="90%"
                className="presetsInformation-image"
                alt="presetsInformation"
              />
              <Button
                className="presetsInformation-button"
                variant="contained"
                size="large"
                onClick={() => cart.addOneToCart(preset.id)}
              >
                COMPRAR
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresetsInformation;
