import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import './Formulario.css'

const Formulario = ({aoCadastrarTreino}) => {

   const [exercicio, setExercicio] = useState('');
   const [repeticoes, setRepeticoes] = useState('');

   function aoSubmeter(evento){
      evento.preventDefault();
      aoCadastrarTreino({
         exercicio,
         repeticoes
      })
      setExercicio('');
      setRepeticoes('');
   }
   
   return(
      <form className="formulario" onSubmit={aoSubmeter}>
         <h1>Planeje seu treino</h1>
         <Campo 
            label={'Digite o exercício:'} 
            tipo={'text'} 
            valor={exercicio} 
            aoAlterado={valor => setExercicio(valor)}
            obrigatorio={true}
         />
         <Campo 
            label={'Digite a quantidade de repetições:'} 
            tipo={'number'} 
            valor={repeticoes} 
            aoAlterado={valor => setRepeticoes(valor)}
            obrigatorio={true}
         />
         <Botao texto='Envie' />
      </form>
   )
}

export default Formulario