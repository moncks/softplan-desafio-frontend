import React, { useState } from 'react'
import '../css/ExibiBuscaProcesso.css'

import BarraBuscarProcesso from '../ui/BarraBuscarProcesso.jsx'
import NovoProcessoButton from '../ui/NovoProcessoButton'

const ExibiBuscaProcesso = () => {


    return (
        <div className="container" >
            <h1 style={{ textAlign: 'left', margin: '50px 50px 0px 10px', width: '5em', wordBreak: 'break-word' }}>Busca de processos</h1>
            <BarraBuscarProcesso style={{ textAlign: 'left', margin: '0px 0px 0px 80px' }}></BarraBuscarProcesso>
            {/* <NovoProcessoButton></NovoProcessoButton> */}
        </div>
    )
}

export default ExibiBuscaProcesso;