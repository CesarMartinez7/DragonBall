

import Esfera1 from "../assets/esfera1.png";
import Esfera2 from "../assets/esfera2.png";
import Esfera3 from "../assets/esfera3.png";
import Esfera4 from "../assets/esfera4.png";
import Esfera5 from "../assets/esfera5.png";
import Esfera6 from "../assets/esfera6.png";
import Esfera7 from "../assets/esfera7.png";
import "./Esferas.css";

const Esferas = () => {
  return (
    <>
      <img src={Esfera5} className="hidden md:block esfera esfera-animation absolute esfera5" />
      <img src={Esfera6} className="hidden md:block esfera esfera-animation absolute esfera6" />
      <img src={Esfera7} className="hidden md:block esfera esfera-animation absolute esfera7" />
      <img src={Esfera4} className="hidden md:block esfera esfera-animation absolute esfera4" />
      <img src={Esfera1} className="hidden md:block esfera esfera-animation absolute esfera1"/>
      <img src={Esfera2} className="hidden md:block esfera esfera-animation absolute esfera2"/>
      <img src={Esfera3} className="hidden md:block esfera esfera-animation absolute esfera3" />
    </>
  );
};

export default Esferas;
