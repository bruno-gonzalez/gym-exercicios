import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './pages/Inicio';
import TreinoPronto from './pages/TreinosProntos';
import NotFound from './pages/NotFound';


function AppRoutes() {
   return(
      <BrowserRouter>
         <Cabecalho />
         <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/treinos' element={<TreinoPronto />}></Route>
            <Route path='*' element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}

export default AppRoutes;