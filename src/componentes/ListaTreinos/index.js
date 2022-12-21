import styles  from './ListaTreinos.module.css';
import Superior1 from './Superior1';
import Superior2 from './Superior 2';
import Inferior1 from './Inferior';

export default function ListaTreinos(){
   return(
      <div className={styles.treino}>
         <Superior1 />
         <Superior2 />
         <Inferior1 />
      </div>
   )
}