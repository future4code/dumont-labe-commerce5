import React from 'react';

export default class Filtro extends React.Component {
    render(){
        return (
            <div>
                <h3>Filtros</h3>
                <div>
                    <label>Valor mínimo:</label>
                    <input 
                    type="number" 
                    value={this.props.filtroMinimo}
                    // Esse erro vai sumir quando a função onChange for colocada no App.js (função já pronta para ser inserida)
                    onChangeFiltroMinimo{this.props.onChangeFiltroMinimo}
                    />
                </div>
                <div>
                    <label>Valor máximo:</label>
                    <input 
                    type="number"
                    value={this.props.filtroMaximo} 
                    // Esse erro vai sumir quando a função onChange for colocada no App.js (função já pronta para ser inserida)
                    onChangeFiltroMaximo{this.props.onChangeFiltroMaximo}
                    />
                </div>
                <div>
                    <label>Buscar produto:</label>
                    <input 
                    type="text" 
                    value={this.props.filtroBuscar}
                    // Esse erro vai sumir quando a função onChange for colocada no App.js (função já pronta para ser inserida)
                    onChangeFiltroBuscar{this.props.onChangeFiltroBuscar}
                    />
                </div>
            </div>
        );
    }
}