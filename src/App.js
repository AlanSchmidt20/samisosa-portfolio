import "./App.css";
import Header from "./components";
import Home from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/Body/About";
import Servicios from "./screens/Body/Servicios/Servicios";
import Redes from "./screens/Body/Redes/Redes";
import Contact from "./screens/Body/Contact/Contact";
import PresetsInformation from "./screens/Body/PresetsInformation/PresetsInformation";
import CartProvider from "./CartContext";
import ContenidoParaTuMarca from "./components/ContenidoParaTuMarca/ContenidoParaTuMarca";
import CursosInformation from "./screens/Body/CursosInformation";
import Footer from "./components/Footer/Footer";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <div className="screens--wraper">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="quienSoy" element={<About />} />
              <Route path="cursos" element={<CursosInformation />} />
              <Route path="servicios" element={<Servicios />} />
              <Route path="presets" element={<PresetsInformation />} />
              <Route path="subscripción" element={<Contact />} />
              <Route path="redes" element={<Redes />} />
              <Route
                path="contenidoParaTuMarca"
                element={<ContenidoParaTuMarca />}
              />
              {/* <Route path="success" element={<Success />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
