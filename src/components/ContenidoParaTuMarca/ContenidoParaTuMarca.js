import "./ContenidoParaTuMarca.css";
import {
  leftImages,
  rightImages,
  items,
} from "../../content/contenidoParaTuMarca";
import MyIcon from "../../images/icons/contenidoParaTuMarca-icono.png";

const ContenidoParaTuMarca = () => (
  <div className="leftImages-rightImages-container">
    <div className="contenidoParaTuMarca-images-container">
      {leftImages.map((image) => (
        <img
          src={`${image.image}`}
          className="contenidoParaTuMarca-images"
          alt="contenidoParaTuMarca"
        />
      ))}
    </div>
    <div className="title-items-container">
      <h1>Trabajemos juntxs!</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="contenidoParaTuMarca-items">
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={MyIcon} alt="myIcon" width="7%" className="list-icon" />
              {item.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="contenidoParaTuMarca-images-container">
      {rightImages.map((image) => (
        <img
          src={`${image.image}`}
          className="contenidoParaTuMarca-images"
          alt="contenidoParaTuMarca"
        />
      ))}
    </div>
  </div>
);

export default ContenidoParaTuMarca;
