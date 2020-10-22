import React from 'react';
import styled from "styled-components";

import CarrinhoItem from "../CarrinhoItem";

const CarrinhoContainer = styled.div`
  border: 1px solid black;
`;

const ListaProdutosContainer = styled.div`
  display: grid;
  gap: 4px;
`;

//Para somar o total de itens no carrinho
// getTotalValue = () => {
//   let totalValue = 0;

//   for (let produto of this.props.produtosCarrinho) {
//     totalValue += produto.price * produto.quality;
//   }
//   return totalValue;
// };

class Carrinho extends React.Component {
  render() {
    return (
      <CarrinhoContainer>
        <h3>Carrinho:</h3>
        <ListaProdutosContainer>
          {/* {this.props.produtosCarrinho.map((produto) => {
            return <CarrinhoItem cartItem={produto}/>
          })} TESTE*/}
          <CarrinhoItem />
          <p>Valor total:</p>
        </ListaProdutosContainer>
      </CarrinhoContainer>
    );
  }
}

export default Carrinho;
