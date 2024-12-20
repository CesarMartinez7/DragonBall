import React from "react";
import Esfera1 from "../assets/Esfera1.png";
import Esfera2 from "../assets/Esfera2.png";
import Esfera3 from "../assets/Esfera3.png";
import Esfera4 from "../assets/Esfera4.png";
import Esfera5 from "../assets/Esfera5.png";
import Esfera6 from "../assets/Esfera6.png";
import Esfera7 from "../assets/Esfera7.png";
import "./Esferas.css";

const Esferas = () => {
  return (
    <>
      <img src={Esfera5} alt="" className="esfera-animation absolute esfera5" />
      <img src={Esfera6} alt="" className="esfera-animation absolute esfera6"/>
      <img src={Esfera7} alt="" className="esfera-animation absolute esfera7" />
      <img
        src={Esfera4}
        alt=""
        className="esfera-animation absolute esfera4"
      />
      <img
        src={Esfera1}
        className="esfera-animation absolute esfera1"
        style={{
          left: "404px",
          top: "392px",
          width: "103px",
          cursor: "move",
        }}
      />
      <img
        src={Esfera2}
        alt=""
        className="esfera-animation absolute"
        style={{
          left: "808px",
          top: "249px",
          width: "101px",
          cursor: "move",
        }}
      />
      <img
        src={Esfera3}
        alt=""
        className="esfera-animation absolute"
        style={{
          left: "1438px",
          top: "420px",
          width: "120px",
          cursor: "move",
          transform: " translate(0px, -17.6742px)",
        }}
      />
    </>
  );
};

export default Esferas;
