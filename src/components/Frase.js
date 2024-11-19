import estilos from './Frase.module.css'

function Frase ({nome}){
    return (
       <div className={estilos.fraseContainer}>
            <p className={estilos.fraseContent}>Essa é uma frase feita por {nome}</p>
       </div> 
    )
}

export default Frase