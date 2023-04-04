import "./Redes.css";
import { redes1, redes2 } from "../../../content/redes";

const Redes = () => {
  return (
    <div className="redes-container">
      <div>
        <div className="redes1-container">
          {redes1.map((item) => (
            <div key={item.id} className="redes1-icon-title-container">
              <img alt="redes" src={item.image} className="redes-image" />
              <div className="redes1-icon-title">
                <div className="icon-title-container">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      alt="redesIcon"
                      className="redes-icon"
                      type="icon"
                      src={item.icon}
                      width="30px"
                      height="30px"
                    />
                  </a>
                  <h1 className="title-redes">{item.title}</h1>
                </div>
                <h4 className="subTitle-redes">{item.subTitle}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="redes2-container">
          {redes2.map((item) => (
            <div key={item.id} className="redes2-icon-title-container">
              <div className="redes2-icon-title">
                <div className="title-icon-container">
                  <h1 className="title-redes">{item.title}</h1>

                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      alt="redesIcon"
                      type="icon"
                      src={item.icon}
                      width="30px"
                      height="30px"
                      className="redes2-icon"
                    />
                  </a>
                </div>
                <h4 className="subTitle-redes">{item.subTitle}</h4>
              </div>
              <img alt="redes" className="redes2-image" src={item.image} />
            </div>
          ))}
        </div>
      </div>
      <h1 className="redes-title">REDES</h1>
    </div>
  );
};

export default Redes;
