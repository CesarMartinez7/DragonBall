import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Character = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id, saga } = useParams();
  console.log(id, saga);

  useEffect(() => {
    fetch(`https://www.dragonballapi.com/${saga}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((dataa) => setData(dataa))
      .catch((error) => setError(error));
  }, [id, saga]);

  if (error) return <h1 className="text-red-500 text-center mt-10">Error: {error.message}</h1>;
  if (!data)
    return (
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="loading loading-infinity loading-lg"></span>
      </h1>
    );

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <Navbar />
      <div className="p-4 xl:p-24 h-full bg-transparent lg:p-7 md:p-10 flex flex-col items-center justify-center xl:w-2/4">
        <h2 className="font-bold text-6xl text-white mb-6">{data.name}</h2>
        <figure className="max-w-lg mb-6">
          <img
            src={data.image}
            alt={data.name}
            className="object-cover h-fit w-96 rounded-lg shadow-lg"
          />
        </figure>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="w-full text-lg">
            <span className="font-semibold bg-gray-800 p-2 rounded-lg shadow-md">Planeta 🪐:</span> {data.planet}
          </p>
          <p className="w-full text-lg ">
            <span className="font-semibold  bg-gray-800 p-2 rounded-lg shadow-md">Genero:</span> {data.genre}
          </p>
          <p className="w-full text-lg text-justify">
            <span className="font-semibold ">Descripcion personaje 👨:</span> {data.description}
          </p>
          <p className=" w-full text-lg text-justify">{data.biography}</p>
          <h3 className="font-light text-2xl mt-4 text-left w-full">Transformaciones</h3>
          <div className="w-full flex flex-wrap gap-2 mt-2">
            {data.transformations.map((transformacion, index) => (
              <h3 key={index} className="bg-gray-800 p-2 rounded-lg shadow-md">
                {transformacion.title}
              </h3>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Character;
