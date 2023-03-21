import "./Presets.css";
import PresetsImage1 from "../../../images/presets-image1.PNG";
import PresetsImage2 from "../../../images/presets-image2.PNG";
import useWindowSize from "../../../hooks/useWindowSize";

const Presets = () => {
  const [width] = useWindowSize();
  return (
    <div className="presets-container">
      <div
        className={
          width > 1020
            ? "animate__animated animate__fadeInDown animate__slow presets-title-description"
            : "presets-title-description"
        }
      >
        <h1 className="presets-title">PRESETS</h1>
        <p className="presets-description">
          Eleva la calidad y edicion de tus fotos con tan solo un click para
          llevar tu contenido al siguiente nivel.
        </p>
      </div>
      <div
        className={
          width > 1020
            ? "animate__animated animate__zoomIn animate__slow presets-images"
            : "presets-images"
        }
      >
        <img src={PresetsImage1} />
        <img src={PresetsImage2} />
      </div>
    </div>
  );
};

export default Presets;
