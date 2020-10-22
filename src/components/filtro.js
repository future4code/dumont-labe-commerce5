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
                    />
                </div>
                <div>
                    <label>Valor máximo:</label>
                    <input 
                    type="number"
                    value={this.props.filtroMaximo} 
                    />
                </div>
                <div>
                    <label>Buscar produto:</label>
                    <input 
                    type="text" 
                    value={this.props.filtroBuscar}
                    />
                </div>
            </div>
        );
    }
}