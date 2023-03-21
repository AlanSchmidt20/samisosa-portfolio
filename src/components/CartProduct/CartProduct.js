import { CartContext } from "../../CartContext";
import { useContext } from "react";
import { getProductData } from "../../content/presetsInformation";
import CloseIcon from "@mui/icons-material/Close";
import "./CartProduct.css";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <div className="cartProduct-container">
        <img
          src={`${productData.image}`}
          alt={productData.image}
          height="100px"
          width="120px"
        />
        <div className="cartProduct-title-total-container">
          <h3 className="cartProduct-title">
            {quantity} {productData.title} {quantity > 1 ? "Presets" : "Preset"}
          </h3>
          <p>${(quantity * productData.price).toFixed(2)}</p>
        </div>
        <CloseIcon onClick={() => cart.removeOneFromCart(id)} />
      </div>
      <hr></hr>
    </>
  );
};

export default CartProduct;
