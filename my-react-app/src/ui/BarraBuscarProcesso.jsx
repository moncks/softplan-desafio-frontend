import React, { useState } from 'react'
import '../css/BarraBuscarProcesso.css'

const BarraBuscarProcesso = ({ value, ...props }) => {

    const [pesquisa, setPesquisa] = useState('')

    return (
        <input
            name="text"
            type="text"
            placeholder="Pesquise por uma informação do processo"
            {...props}
        />

    )
}

export default BarraBuscarProcesso;
