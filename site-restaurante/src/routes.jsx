import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cardapio from "./pages/Cardapio/Cardapio"
import Localizacao from "./pages/Localizacao/Localizacao"
import Reservas from "./pages/Reservas/Reserva"
import Sobre from "./pages/Sobre/Sobre"

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
