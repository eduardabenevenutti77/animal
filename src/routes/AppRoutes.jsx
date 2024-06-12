import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Body from "../layout/Body";
import Album from "../pages/Album";
// import Theme from '../pages/Theme';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {" "}
      {/* responsável por englobar o app em navegação */}
      <Routes>
        {" "}
        {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/album" element={<Album/>} />
          <Route path="/contato" element={<Contato />} />
          {/* <Route path="/theme" element={<Theme/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
