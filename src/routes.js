import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './pages/Inicio';
import TreinoPronto from './pages/TreinosProntos';


function AppRoutes() {
   return(
      <BrowserRouter>
         <Cabecalho />
         <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/treinos' element={<TreinoPronto />}></Route>
         </Routes>
      </BrowserRouter>
   )
}

export default AppRoutes;