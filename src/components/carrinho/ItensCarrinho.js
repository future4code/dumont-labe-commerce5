import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 45px;
  align-items: center;
`;

export default class ItensCarrinho extends React.Component {
  render() {
    return (
      <ItemContainer>
        <p>{this.props.produtoNoCarrinho.quantidade}X</p>
        <p>{this.props.produtoNoCarrinho.nome}</p>
        <button 
        onClick={() => this.props.onRemoverProdutosdoCarrinho(this.props.produtoNoCarrinho.id)}
        >
          Remover
        </button>
      </ItemContainer>
    );
  }
}
