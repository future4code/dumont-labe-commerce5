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

const Titulo = styled.h3`
 font-size: 1.5em;
 text-align: center;
`

export default class Filtro extends React.Component {
    render(){
        return (
            <FilterContainer>
                <Titulo>Filtros</Titulo>
                <div>
                    <InputContainer>Valor mínimo:</InputContainer>
                    <input 
                    type="number" 
                    value={this.props.filtroMinimo}
                    onChange={this.props.onChangeFiltroMinimo}
                    />
                </div>
                <div>
                    <InputContainer>Valor máximo:</InputContainer>
                    <input 
                    type="number"
                    value={this.props.filtroMaximo} 
                    onChange={this.props.onChangeFiltroMaximo}
                    />
                </div>
                <div>
                    <InputContainer>Buscar produto:</InputContainer>
                    <input 
                    type="text" 
                    value={this.props.filtroBuscar}
                    onChange={this.props.onChangeFiltroBuscar}
                    />
                </div>
            </FilterContainer>
        );
    }
}