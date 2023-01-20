import './NotFound.css';
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
    const navigate = useNavigate();

    return(
        <div className='nf__container'>
            <div>
                <button className='nf__botao' onClick={() => navigate(-1)}>{'< Voltar'}</button>
            </div>
            <h3 className='nf__titulo'>Error 404 - Página não encontrada!</h3>
        </div>
    );
}