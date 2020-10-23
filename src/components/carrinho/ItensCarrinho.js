import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 45px;
  align-items: center;
`;

class ItensCarrinho extends React.Component {
  reder() {
    return (
      <ItemContainer>
        <p>{this.props.cartItem.quantidade}X</p>
        <p>{this.props.cartItem.nome}</p>
        <button 
        onClick={() => this.props.onRemoverProdutosdoCarrinho(this.props.cartItem.id)}
        >
          Remover
        </button>
      </ItemContainer>
    );
  }
}
export default ItensCarrinho;
