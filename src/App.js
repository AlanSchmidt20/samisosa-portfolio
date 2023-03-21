import "./App.css";
import Header from "./components";
import Home from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/Body/About";
import Cursos from "./screens/Body/Cursos";
import Servicios from "./screens/Body/Servicios/Servicios";
import Presets from "./screens/Body/Presets/Presets";
import Redes from "./screens/Body/Redes/Redes";
import Contact from "./screens/Body/Contact/Contact";
import PresetsInformation from "./screens/Body/PresetsInformation/PresetsInformation";
import CartProvider from "./CartContext";
import ContenidoParaTuMarca from "./components/ContenidoParaTuMarca/ContenidoParaTuMarca";
import Success from "./screens/Body/Success/Success";
import CursosInformation from "./screens/Body/CursosInformation";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <div className="screens--wraper">
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
            <Route path="success" element={<Success />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
