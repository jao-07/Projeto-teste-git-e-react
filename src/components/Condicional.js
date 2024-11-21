import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("testando")
    }

    function limparEmail(){
        setUserEmail("")
    }

    return(
        <>
            <h2>Cadastre o seu email: </h2>
            <form>
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}> Enviar Email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail do usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </>
    )
}

export default Condicional