import logo from '../../img/GYM.png';
import './Cabecalho.css';
import { IoHomeOutline} from 'react-icons/io5';


const Cabecalho = () => {
   
   return(
      <header className='cabecalho'>
         <div className='logo__container'><img className='logo' src={logo} alt='' /></div>
         <ul>
            <li><IoHomeOutline size={35} className='icone' /></li>
         </ul>
      </header>
   )
}

export default Cabecalho