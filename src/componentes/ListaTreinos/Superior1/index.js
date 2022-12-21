import TreinoSuperiores1 from '../../../json/Superiores1.json';
import styles from "../ListaTreinos.module.css"

export default function Superior1(){
   return(
      <div className={styles.container}>
         <h1>Superior A</h1>
         {
            TreinoSuperiores1.map(treino => {
               return(
                  <ul className={styles.lista} key={treino.id}>
                     <li className={styles.item__lista}>
                        <p>{treino.Exercicio}</p>
                        <span>{treino.Repeticoes}</span>
                     </li>
                  </ul>
               )
            })
         }
      </div>
   )
}