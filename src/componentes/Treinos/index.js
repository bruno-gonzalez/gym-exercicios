import './Treinos.css';
import logo from '../../img/GYM.png'
import NovoTreino from '../NovoTreino';

const Treinos = ({treino, exercicios, repeticoes, aoDeletar}) => {
   return(
         <div className='treinos__container'>
            <div>
               <NovoTreino 
                  key={treino.id}
                  treino={treino}
                  exercicio={exercicios} 
                  repeticoes={repeticoes} 
                  aoDeletar={aoDeletar}
               />
            </div>
            <div className='cabecalho__treino'>
               <img className='logo__treino' src={logo} alt="" />
            </div>
            
         </div>
   )
}

export default Treinos