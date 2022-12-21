import Inferior from '../../../json/Inferiores.json';
import styles from "../ListaTreinos.module.css"

export default function Inferior1(){
   return(
      <div className={styles.container}>
         <h1>Inferior</h1>
         {
            Inferior.map(treino => {
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