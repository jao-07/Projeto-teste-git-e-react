import Button from "./Button"

function Evento() {

    function PrimeiroEvento(){
        //console.log("Primeiro evento ativado")
        window.open('https://www.google.com', '_blank')
    }

    function SegundoEvento(){
        console.log("Segundo evento ativado")
    }

    return(
        <>
            <p>Clique para disparar o evento: </p>
            <Button evento={PrimeiroEvento} texto="Primeiro Evento"/>
            <Button evento={SegundoEvento} texto="Segundo Evento"/>
        </>
    )
}

export default Evento