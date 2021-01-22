import React, { useState } from 'react'
import '../css/ExibiBuscaProcesso.css'

import BarraBuscarProcesso from '../ui/BarraBuscarProcesso.jsx'
import NovoProcessoButton from '../ui/NovoProcessoButton'

const ExibiBuscaProcesso = () => {


    return (
        <div id="exibirBuscaProcesso" >
            <h1 style={{ textAlign: 'left', margin: '50px 50px 0px 10px', width: '5em', wordBreak: 'break-word' }}>Busca de processos</h1>
            <BarraBuscarProcesso style={{
                padding: '18px 10px',
                alignItems: 'center',
                borderRadius: '4px',
                shadowRadius: '1px',
                border: '1px solid #757575',
                fontSize: '18px',
                width: '25%',
                margin: '0px 0px 0px 120px'
            }}></BarraBuscarProcesso>
            <NovoProcessoButton></NovoProcessoButton>
        </div>
    )
}

export default ExibiBuscaProcesso;