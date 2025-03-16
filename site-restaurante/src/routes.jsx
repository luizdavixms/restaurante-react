import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Cardapio from "./pages/Cardapio"
import Localizacao from "./pages/Localizacao"
import Reservas from "./pages/Reservas"
import Sobre from "./pages/Sobre"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/Cardapio" element={ <Cardapio /> }></Route>
        <Route path="/Localizacao" element={ <Localizacao /> }></Route>
        <Route path="/Reservas" element={ <Reservas /> }></Route>
        <Route path="/Sobre" element={ <Sobre /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
