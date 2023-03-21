import * as React from "react";
import { useRef, useState, useContext, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Navbar.css";
import { NavBarTitles } from "./NavBarConstant";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../../../hooks/useWindowSize";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CartContext } from "../../../CartContext";
import CartProduct from "../../CartProduct/CartProduct";
import { loadMercadoPago, MercadoPago } from "@mercadopago/sdk-js";
import useMercadoPago from "../../../hooks/useMercadoPago";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const [width] = useWindowSize();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Find the index of the current route in the NavBarTitles array
  const currentIndex = NavBarTitles.findIndex(
    (item) => location.pathname === item.path
  );

  const mercadopago = useMercadoPago(
    "TEST-c65da426-e45e-499a-8c0f-e05b2234553e",
    {
      locale: "en-US",
    }
  );
  // Update the value state variable to reflect the current index
  if (currentIndex !== -1 && currentIndex !== value) {
    setValue(currentIndex);
  }

  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  /*   const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to MercadoPago
        }
      });
  }; */
  const Checkout = () => {
    console.log(mercadopago, "asdfasd");
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: "YOUR_PREFERENCE_ID",
        },
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current?.classList.toggle("responsive--nav");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <nav ref={navRef}>
        <Tabs
          className="navBar--tabs"
          value={value}
          onChange={handleChange}
          onClick={showNavBar}
          textColor="inherit"
        >
          {NavBarTitles.map((routingName, index) => (
            <Tab
              label={routingName.title}
              to={routingName.path}
              component={Link}
              className="tab--item"
              {...a11yProps(index)}
            />
          ))}
          <IconButton className="shoppingCart-icon-container" aria-label="cart">
            <Badge badgeContent={productsCount}>
              <ShoppingCartIcon onClick={handleOpen} />
            </Badge>
          </IconButton>
        </Tabs>
        {open && (
          /* productsCount > 0 && */ <Dialog open={open} onClose={handleClose}>
            {/* <DialogTitle>CARRITO</DialogTitle> */}
            <DialogContent>
              <div className="cho-container"></div>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
            </DialogContent>
            <DialogActions>
              <Button onClick={Checkout}>Realizar Compra</Button>
            </DialogActions>
          </Dialog>
        )}
      </nav>
      <MenuIcon className="nav-btn" fontSize="large" onClick={showNavBar} />
    </Box>
  );
};

export default NavBar;
