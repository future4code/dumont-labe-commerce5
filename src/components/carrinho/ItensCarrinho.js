import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
`;

const RemoverButton = styled.button `
  margin: 5px;
  background-color: blue;
  color: white;
`

export default class ItensCarrinho extends React.Component {
  render() {
    return (
      <ItemContainer>
        <p>{this.props.cartItem.quantidade}x</p>
          <p>{this.props.cartItem.nome}</p>
          <RemoverButton onClick={() => 
            this.props.onRemoveProduct(this.props.cartItem.id)}>
              Remover
              </RemoverButton>
      </ItemContainer>
    );
  }
}
