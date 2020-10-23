import React from 'react';
import styled from "styled-components";

const FilterContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`
const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

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
                    onChangeFiltroMinimo={this.props.onChangeFiltroMinimo}
                    />
                </div>
                <div>
                    <label>Valor máximo:</label>
                    <input 
                    type="number"
                    value={this.props.filtroMaximo} 
                    onChangeFiltroMaximo={this.props.onChangeFiltroMaximo}
                    />
                </div>
                <div>
                    <label>Buscar produto:</label>
                    <input 
                    type="text" 
                    value={this.props.filtroBuscar}
                    onChangeFiltroBuscar={this.props.onChangeFiltroBuscar}
                    />
                </div>
            </div>
        );
    }
}