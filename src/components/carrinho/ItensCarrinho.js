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
        <p>{this.props.CardItemtem.quantidade}</p>
        {/* <p>1x</p> */}
        <p>{this.props.CardItem.nome}</p>
        {/* <p>Produto</p> */}
        <button onClick={() => this.props.removerProduto(this.props.cardItem.id)}>
          Remover
        </button>
      </ItemContainer>
    );
  }
}
export default ItensCarrinho;
