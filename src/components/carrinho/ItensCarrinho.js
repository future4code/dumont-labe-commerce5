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
        <p>{this.props.cardItem.quantidade}X</p>
        <p>{this.props.cardItem.nome}</p>
        <button onClick={() => this.props.removerProduto(this.props.cardItem.id)}>
          Remover
        </button>
      </ItemContainer>
    );
  }
}
export default ItensCarrinho;
