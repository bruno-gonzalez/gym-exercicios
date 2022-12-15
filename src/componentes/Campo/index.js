import './Campo.css'

const Campo = ({label, tipo, valor, aoAlterado, obrigatorio = false}) => {
   return(
      <div className='container__input'>
         <label className='label__input'>{label}</label>
         <input 
            type={tipo} 
            className='input' 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio}
         />
      </div>

   )
}

export default Campo