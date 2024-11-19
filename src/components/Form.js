import { useState } from 'react'

function Form() {
    function cadastrouUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
            <h1>Cadastro de usuario</h1>
            <form onSubmit={cadastrouUsuario}>
                    <div>
                        <label htmlFor="name"> Nome: </label>
                        <input 
                            type="text" 
                            placeholder="Digite o seu nome" 
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div>
                        <label htmlFor="password">Senha: </label>
                        <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default Form