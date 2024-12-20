import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Character = () => {
  const [data, setData] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://www.dragonballapi.com/dragonball/${id}`)
      .then((response) => response.json())
      .then((dataa) => setData(dataa));
      console.log(id)
  }, [id]);

  if (!data) return <h1>Cargando...</h1>;
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4 h-screen w-3/5 bg-transparent">
        <img src={data.image} alt="" className="object-cover h-fit w-96 " />
        <h1 className="font-bold text-6xl">{data.name}</h1>
        <p>Planeta 🪐: {data.planet}</p>
        <p>Genero: {data.genre}</p>
        <p>Descripcion personaje 👨: {data.description}</p>
        <p>{data.biography}</p>
      </div>
    </main>
  );
};

export default Character;
