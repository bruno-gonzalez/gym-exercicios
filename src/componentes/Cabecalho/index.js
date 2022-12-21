import logo from '../../img/GYM.png';
import CabecalhoLink from '../CabecalhoLink';
import './Cabecalho.css';
import { IoHomeOutline} from 'react-icons/io5';
import {CgGym} from 'react-icons/cg'


const Cabecalho = () => {
   
   return(
      <header className='cabecalho'>
         <div className='logo__container'><img className='logo' src={logo} alt='' /></div>
         <div>
            <CabecalhoLink url="./">
               <IoHomeOutline size={25} /> 
            </CabecalhoLink>
            <CabecalhoLink url="./treinos">
               <CgGym size={25} />
            </CabecalhoLink>
         </div>

      </header>
   )
}

export default Cabecalho