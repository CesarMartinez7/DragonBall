import React, { useState, useEffect } from "react";
import LogoDragonBallClasico from "../../public/dragonballclasico.png";
import LogoDragonBallZ from "../assets/dragonballz.png";
import LogoDragonBallGt from "../assets/dragonballgt.png";
import LogoDragonBallSuper from "../assets/dragonballsuper.png";

const Fetching = ({ casting = "dragonball" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  let logoFinal = null;
  useEffect(() => {
    fetch(`https://www.dragonballapi.com/${casting}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="fixed">
        <h1 className="font-bold text-2xl">Cargando...</h1>
      </div>
    );
  }

  switch (casting) {
    case "dragonballz":
      logoFinal = LogoDragonBallZ;
      break;
    case "dragonballsuper":
      logoFinal = LogoDragonBallSuper;
      break;
    case "dragonball":
      logoFinal = LogoDragonBallClasico;
      break;
    case "dragonballgt":
      logoFinal = LogoDragonBallGt;
      break;
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={logoFinal} className="drop-box w-96" />
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5 w-full p-6 lg:grid-cols-4 md:grid-cols-3 ">
        {data.map((item, index) => (
          <a href={`/characters/${casting}/${item.id}`} className="card p-8 card-glass gris-filter" key={index} onClick={() => {
            // window.location.href=`/characters/${item.id}`
            console.log(item.id);
          }}>
            <img
              src={item.image}
              alt={`Imagen de ${item.name}`}
              className="aspect-auto m-2 hover:scale-110 duration-150"
            />
            <h1 className="font-bold text-xl text-white mb-2">{item.name}</h1>
            <p className="text-white">{item.race}</p>
            <p className="text-white">{`Planeta: ${item.planet}`}</p>
            <p className="text-white">{`Genero: ${item.genre}`}</p>
            <a
              className="text-left"
              href={`/characters/${casting}/${item.id}`}
              onClick={() => {
                console.log(item.id);
              }}
            >
              Ver mas detalles{" "}
            </a>
          </a>
        ))}
      </div>
    </>
  );
};

export default Fetching;
