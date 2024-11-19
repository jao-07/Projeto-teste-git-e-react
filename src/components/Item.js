import PropTypes from 'prop-types'

function Item({modelo, anoLançamento}){
    return(
        <>
            <li>{modelo} - {anoLançamento} </li>
        </>
    )
}

Item.propTypes = {
    modelo: PropTypes.string.isRequired,
    anoLançamento: PropTypes.number
}

Item.defaultProps = {
    modelo: "Sem modelo",
    anoLançamento: 0
}

export default Item