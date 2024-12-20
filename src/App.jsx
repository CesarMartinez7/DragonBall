import { useState } from "react";
import "./App.css";
import Fetching from "./Components/Data";
import Esferas from "./Components/Esferas";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Esferas></Esferas>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-dvh flex flex-col items-center justify-center ">
          <h1 className="font-bold text-5xl xl:text-7xl p-5  text-white text-center ">
            Dragon Ball Sagas{" "}
          </h1>
          <p className="text-center plt z-10 text-sm xl:w-4/6">
            Dragon Ball es una serie de manga y anime creada por Akira Toriyama.
            La historia sigue las aventuras de Goku, un guerrero Saiyan,
            mientras busca las Esferas del Dragón, que pueden conceder cualquier
            deseo. A lo largo de su viaje, Goku hace amigos, enfrenta poderosos
            enemigos y protege la Tierra de diversas amenazas.
          </p>
        </div>
      </main>
      <Fetching></Fetching>
    </>
  );
}

export default App;
