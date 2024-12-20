import React from "react";
import Esfera1 from "../assets/Esfera1.png";
import Esfera2 from "../assets/Esfera2.png";
import Esfera3 from "../assets/Esfera3.png";
import Esfera4 from "../assets/Esfera4.png";
import Esfera5 from "../assets/Esfera5.png";
import Esfera6 from "../assets/Esfera6.png";
import Esfera7 from "../assets/Esfera7.png";

const Esferas = () => {
  return (
    <>
      <img src={Esfera5} alt="" className="esfera-animation absolute" style={{width: "101px" ,left: "1085px" ,top: "309px"}}/>
      <img src={Esfera6} alt="" className="esfera-animation absolute" style={{ transform: "translate(0px, 319.999px)", left: "876px", top: "646px", width:"101px"}}/>
      <img src={Esfera7} alt="" className="esfera-animation absolute" style={{left: "445px", top: "676px", width: "101px", height: "101px", transform: "translate(0px, 64.2656px)"}}/>
      <img
        src={Esfera4}
        alt=""
        className="esfera-animation absolute"
        style={{
          left: "1087px",
          top: "674px",
          width: "103px",
          height: "100px",
          transform: "translate(40px, -7.9062px)",
        }}
      />
      <img
        src={Esfera1}
        className="esfera-animation absolute"
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
