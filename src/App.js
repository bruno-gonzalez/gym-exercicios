import './App.css';
import './reset.css'
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Treinos from './componentes/Treinos';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [treinos, setTreinos] = useState([

  ]);

  function cadastrarTreino(novoTreino) {
    setTreinos([...treinos, {...novoTreino, id: uuidv4()}])
  }

  function deletarTreino(id) {
    setTreinos(treinos.filter(treino => treino.id !== id))
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Formulario treinos={treinos} aoCadastrarTreino={novoTreino => cadastrarTreino(novoTreino)} />
      </header>
      <section className='treinos__titulo'>
        <div className='treinos'>
          <h2>Treino de Hoje</h2>
          {treinos.map(treino => {
            return(
              <Treinos 
                key={treino.id}
                exercicios={treino.exercicio} 
                repeticoes={treino.repeticoes} 
                aoDeletar={ () => deletarTreino(treino.id)}
                treino={treinos}
              />
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
