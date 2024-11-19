import Item from './Item'

function Lista(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item modelo="Palio" anoLançamento={2006}/>
                <Item modelo="Duster" anoLançamento={2018}/>
                <Item modelo="Hilux" anoLançamento={2015}/>
                <Item anoLançamento={2002}/>
            </ul> 
        </>
    )
}

export default Lista