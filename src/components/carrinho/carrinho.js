import React from 'react';
import styled from "styled-components";
import ItensCarrinho from "../carrinho/ItensCarrinho";

const CarrinhoContainer = styled.div`
  border: 1px solid black;
`;

const ListaProdutosContainer = styled.div`
  display: grid;
  gap: 4px;
`;

export default class Carrinho extends React.Component {

   //Para somar o total de itens no carrinho
  valorTotalCompras = () => {
    let valorTotal = 0;

    for (let produto of this.props.produtoNoCarrinho) {
      valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
  };

  render() {
    return (
      <CarrinhoContainer>
        <h3>Carrinho:</h3>
        <ListaProdutosContainer>
           {this.props.produtosNoCarrinho.map((produto) => {
            return <ItensCarrinho 
                    produtoNoCarrinho={produto} 
                    onRemoverProdutosdoCarrinho={this.props.onRemoverProdutosdoCarrinho}
                    />
          })} 
          <ItensCarrinho />
          <p>Valor total: R${this.valorTotalCompras()}</p>
        </ListaProdutosContainer>
      </CarrinhoContainer>
    );
  }
}

