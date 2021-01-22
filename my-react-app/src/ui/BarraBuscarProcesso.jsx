import React, { useState } from 'react'
import '../css/BarraBuscarProcesso.css'

const BarraBuscarProcesso = () => {

    const [pesquisa, setPesquisa] = useState('')

    return (
        <div class="row" style={{ paddingBottom: '30px' }}>
            <form>
                <div>
                    <input
                        name="text"
                        type="text"
                        placeholder="Pesquise por uma informação do processo"
                        value={() => setPesquisa(pesquisa)}
                    />
                    <button >BUSCAR</button>
                </div>
            </form>
        </div>
    )
}

export default BarraBuscarProcesso;
