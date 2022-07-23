import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
