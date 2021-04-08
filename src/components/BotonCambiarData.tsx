import React from 'react'

const data = {
    nombre: 'Raivy',
    edad: 25
}

export const BotonCambiarData = ({ setData }) => {
    return(
        <div>
<button className="btn btn-primary"
onClick={ () => setData( data ) }
    >
    Cambiar Data
</button>

        </div>
    )
}