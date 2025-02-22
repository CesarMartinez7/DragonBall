import Fetching from "./Components/Data";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./Components/Character";
import dragonball from "./assets/dragonballz.png"

const Main = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-dvh flex flex-col items-center justify-center ">
          <div>
            <img src={dragonball}  />
          </div>
          <p className="text-center plt z-10 text-sm xl:w-2/4 text-pretty ">
            Dragon Ball es una serie de manga y anime creada por Akira Toriyama.
            La historia sigue las aventuras de Goku, un guerrero Saiyan,
            mientras busca las Esferas del Dragón, que pueden conceder cualquier
            deseo. A lo largo de su viaje, Goku hace amigos, enfrenta poderosos
            enemigos y protege la Tierra de diversas amenazas.
          </p>
        </div>
      </main>
      <Fetching casting="dragonball" />
      <Fetching casting="dragonballz" />
      <Fetching casting="dragonballgt" />
      <Fetching casting="dragonballsuper" />
      <Fetching casting="dragons" />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters/:saga/:id" element={<Character />} />
      </Routes>
<Footer />
    </BrowserRouter>
  );
}

export default App;
