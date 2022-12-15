import "./NovoTreino.css";

const NovoTreino = ({exercicio, repeticoes, treino, aoDeletar}) => {
   return(
      <section className="novosTreinos">
         <div className='deletar'
            onClick={() => aoDeletar(treino.id)}
         >x
         </div>
       
         <div className="novosTreinos__container">
            <h3>Exercício: {exercicio}</h3>   
            <p>Repetições: {repeticoes}</p>
         </div>
      </section>
   )
}

export default NovoTreino;
