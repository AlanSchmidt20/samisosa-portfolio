import * as React from "react";
import { useRef, useState, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Navbar.css";
import { NavBarTitles } from "./NavBarConstant";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { CartContext } from "../../../CartContext";
import CartProduct from "../../CartProduct/CartProduct";
import Checkout from "../../Checkout/Checkout";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  /*   const [width] = useWindowSize();
   */ const [open, setOpen] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  /*   const [invisible, setInvisible] = React.useState(false);
   */ const location = useLocation();

  // Find the index of the current route in the NavBarTitles array
  const currentIndex = NavBarTitles.findIndex(
    (item) => location.pathname === item.path
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

  const handleOpen = () => {
    if (productsCount > 0) {
      setOpen(true);
      return handleClose;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenCheckout = () => {
    setOpenCheckout(true);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
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
              key={index}
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
        {open && productsCount > 0 && (
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
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
              <Button onClick={handleOpenCheckout}>Realizar Compra</Button>
            </DialogActions>
          </Dialog>
        )}
      </nav>

      <Badge
        badgeContent={productsCount}
        sx={{ margin: "10px" }}
        variant="dot"
        color="secondary"
        className="nav-btn"
      >
        <MenuIcon className="nav-btn" fontSize="large" onClick={showNavBar} />
      </Badge>
      {openCheckout && (
        <Checkout isOpen={openCheckout} onClose={handleCloseCheckout} />
      )}
    </Box>
  );
};

export default NavBar;
