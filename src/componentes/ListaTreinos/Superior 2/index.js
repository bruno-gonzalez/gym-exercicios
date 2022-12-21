import TreinoSuperiores2 from '../../../json/Superiores2.json';
import styles from "../ListaTreinos.module.css"

export default function Superior2(){
   return(
      <div className={styles.container}>
         <h1>Superior B</h1>
         {
            TreinoSuperiores2.map((treino) => {
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