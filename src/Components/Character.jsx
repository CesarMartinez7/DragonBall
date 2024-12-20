import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Character = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.dragonballapi.com/dragonball/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((dataa) => setData(dataa))
      .catch((error) => setError(error));
  }, [id]);

  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>Cargando...</h1>;

  return (
    <main className="h-screen ">
      <div className="p-4 xl:p-10 h-lvh bg-transparent lg:p-7 md:p-10">
        <figure class="max-w-lg">
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.image}
            alt="image description"
          />
        </figure>

        <h1 className="text-3xl font-bold mt-5">{data.name}</h1>
        <p>Genero: {data.genre}</p>
        <p>Raza: {data.race}</p>
        <p>{data.description}</p>
        <p>{data.planet}</p>
        <p>{data.biography}</p>
      </div>
      <Footer />  
    </main>
  );
};

export default Character;
