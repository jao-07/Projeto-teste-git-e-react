function Evento() {

    function meuEvento(){
        console.log("Fui ativado")
    }

    return(
        <>
            <p>Clique para disparar o evento: </p>
            <button onClick={meuEvento}> Ativar! </button>
        </>
    )
}

export default Evento