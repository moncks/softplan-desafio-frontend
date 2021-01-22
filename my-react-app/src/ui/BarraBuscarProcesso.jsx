import React, { useState } from 'react'
import '../css/BarraBuscarProcesso.css'

const BarraBuscarProcesso = () => {

    const [pesquisa, setPesquisa] = useState('')

    return (
        <div class="row" style={{ paddingBottom: '30px' }} aria-label="Basic example">
            <form class="form-inline col-6" style={{ marginLeft: '30px', paddingTop: '50px', marginBottom: '10px' }}>
                <div class="input-group mb-3">
                    <input
                        name="text"
                        type="text"
                        placeholder="Pesquise por uma informação do processo"
                        value={() => setPesquisa(pesquisa)}
                    />
                    <button >Search</button>
                </div>
            </form>
        </div>
    )
}

export default BarraBuscarProcesso;
