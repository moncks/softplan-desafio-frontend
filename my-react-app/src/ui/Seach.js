import React from 'react'

const BarraBuscarProcesso = (props) => {
    return (
        <div class="row" style={{ paddingBottom: '30px' }} aria-label="Basic example">
            <form class="form-inline col-6" style={{ marginLeft: '30px', paddingTop: '50px', marginBottom: '10px' }}>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" type="search" placeholder="Pesquise por uma informação do processo" aria-label="Search"
                        aria-describedby="button-addon2" value={this.state.pesquisa}
                        onChange={(evento) => this.setValor('pesquisa', evento.target.value)} />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(pesquisa) => this.pesquisa(pesquisa)}> Button</button>
                </div>
            </form>
        </div>
    )
}

export default BarraBuscarProcesso;
